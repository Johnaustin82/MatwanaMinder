from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
import os

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    role = db.Column(db.String(20), nullable=False)

    vehicles_operated = db.relationship('Vehicle', foreign_keys='Vehicle.operator_id', backref='operator', lazy=True)
    vehicles_driven = db.relationship('Vehicle', foreign_keys='Vehicle.driver_id', backref='driver', lazy=True)
    vehicles_conducted = db.relationship('Vehicle', foreign_keys='Vehicle.conductor_id', backref='conductor', lazy=True)
    tickets = db.relationship('Ticket', backref='user', lazy=True)
    reviews_given = db.relationship('Review', foreign_keys='Review.user_id', backref='reviewer', lazy=True)
    reviews_received = db.relationship('Review', foreign_keys='Review.reviewed_user_id', backref='reviewed', lazy=True)

    def __init__(self, name, email, password, role):
        self.name = name
        self.email = email
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
        self.role = role

    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)

class Vehicle(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    license_plate = db.Column(db.String(255),unique=True, nullable=False)
    model = db.Column(db.String(255), nullable=False)
    capacity = db.Column(db.Integer, nullable=False)
    operator_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    price = db.Column(db.DECIMAL, nullable=False)

    tickets = db.relationship('Ticket', backref='vehicle', lazy=True)

    def __init__(self, license_plate, model, capacity, operator_id, driver_id, conductor_id, start_time, end_time, price):
        self.license_plate = license_plate
        self.model = model
        self.capacity = capacity
        self.operator_id = operator_id
        self.start_time = start_time
        self.end_time = end_time
        self.price = price

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey('vehicle.id'), nullable=False)
    purchase_date = db.Column(db.Date, nullable=False)
    seat_number = db.Column(db.String(80), nullable=False)

    def __init__(self, user_id, vehicle_id, purchase_date, seat_number):
        self.user_id = user_id
        self.vehicle_id = vehicle_id
        self.purchase_date = purchase_date
        self.seat_number = seat_number

class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    reviewed_user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)
    comments = db.Column(db.String(255), nullable=False)

    def __init__(self, user_id, reviewed_user_id, rating, comments):
        self.user_id = user_id
        self.reviewed_user_id = reviewed_user_id
        self.rating = rating
        self.comments = comments
