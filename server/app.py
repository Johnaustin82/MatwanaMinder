from flask import Flask, Blueprint, request, jsonify
from flask_migrate import Migrate
from flask_jwt_extended import create_access_token, jwt_required
from models import db, bcrypt, jwt, User
from flask_cors import CORS
from flask import session
import os

app = Flask(__name__)

app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'your_secret_key')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///site.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your_jwt_secret_key')

db.init_app(app)
bcrypt.init_app(app)
jwt.init_app(app)
migrate = Migrate(app, db)
CORS(app)



auth = Blueprint('auth', __name__)

@auth.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    if not all(k in data for k in ('name', 'email', 'password', 'role')):
        return jsonify({"message": "Missing required fields"}), 400

    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "User already exists"}), 400

    new_user = User(
        name=data['name'],
        email=data['email'],
        password=data['password'],
        role=data['role']
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully"}), 201

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data['email']).first()
    if user and user.check_password(data['password']):
        session['user_id'] = user.id
        session['user_name'] = user.name
        session['user_email'] = user.email  
        access_token = create_access_token(identity=user.id)
        return jsonify(access_token=access_token), 200

    return jsonify({"message": "Invalid credentials"}), 401

app.register_blueprint(auth, url_prefix='/auth')


# vehicle_bp = Blueprint('vehicle', __name__)

# @vehicle_bp.route('/register-matatu', methods=['POST'])
# @jwt_required()
# def register_matatu():
#     try:
#         data = request.form
#         image_file = request.files.get('image')

#         required_fields = ['licensePlate', 'model', 'capacity', 'route', 'price']
#         if not all(field in data for field in required_fields):
#             return jsonify({"message": "Missing required fields"}), 400

    
#         try:
#             capacity = int(data['capacity'])
#             price = float(data['price'])
#         except ValueError:
#             return jsonify({"message": "Invalid data types"}), 400


#         image_url = None
#         if image_file:
#             try:
#                 upload_result = cloudinary.uploader.upload(image_file)
#                 image_url = upload_result.get('url')
#             except Exception as e:
#                 return jsonify({"message": "Image upload failed", "error": str(e)}), 500

    
#         new_vehicle = Vehicle(
#             license_plate=data['licensePlate'],
#             model=data['model'],
#             capacity=capacity,
#             operator_id=request.form.get('operator_id', 1),  
#             mileage=int(request.form.get('mileage', 0)),  
#             route=data['route'],
#             price=price,
#             image_url=image_url
#         )

#         db.session.add(new_vehicle)
#         db.session.commit()

#         return jsonify({"message": "Matatu registered successfully", "vehicle_id": new_vehicle.id}), 201

#     except Exception as e:
#         app.logger.error(f"Failed to register matatu: {str(e)}")
#         return jsonify({"message": "Internal server error", "error": str(e)}), 500


# app.register_blueprint(vehicle_bp, url_prefix='/vehicle')


if __name__ == '__main__':
    app.run(debug=True)

