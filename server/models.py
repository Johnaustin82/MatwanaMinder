from datetime import datetime
from flask_bcrypt import Bcrypt, check_password_hash
from sqlalchemy import DateTime, ForeignKey, Numeric
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin
from config import db

bcrypt = Bcrypt()

class User(db.Model):
    __tablename__= 'users'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String)
    password = db.Column(db.String)
    role = db.Column(db.String)

    def __repr__(self):
        return f'<User{self.id}, {self.name}, {self.email}, {self.password}, {self.role}>'

