from app import app, db
from models import User, Vehicle, Ticket
from faker import Faker
import random
import datetime

fake = Faker()

# Define some initial data
def seed_users():
    users = [
        User(name='John', email='john@gmail.com', password='password', role='operator'),
        User(name='Jane Smith', email='jane@gmail.com', password='password', role='passenger'),
        User(name='Alice Johnson', email='alice@gmail.com', password='password', role='passenger'),
        User(name='Bob Brown', email='bob@gmail.com', password='password', role='passenger')
    ]
    
    db.session.add_all(users)
    db.session.commit()
    return {user.email: user.id for user in users}

def seed_vehicles(user_ids):
    vehicles = [
        Vehicle(
            license_plate='KDK 412G',
            model='Isuzu',
            capacity=33,
            operator_id=user_ids['john@gmail.com'],
            mileage=90000,
            route='Embakasi',
            price=100.00,
            image_url="https://i.pinimg.com/564x/f4/21/88/f42188a2179b16751a11cfef41e20b43.jpg"
        ),
        Vehicle(
            license_plate='KCA 283Y',
            model='Isuzu',
            capacity=33,
            operator_id=user_ids['john@gmail.com'],
            mileage=30000,
            route='Umoja',
            price=100.00,
            image_url="https://i.pinimg.com/564x/5f/5b/99/5f5b99b4f93a1994ab4b7b8161db739b.jpg"
        )
    ]
    
    db.session.add_all(vehicles)
    db.session.commit()
    return {vehicle.license_plate: vehicle.id for vehicle in vehicles}

def seed_tickets(user_ids, vehicle_ids):
    tickets = [
        Ticket(
            user_id=user_ids['jane@gmail.com'],
            vehicle_id=vehicle_ids['1'],
            busName='Isuzu',
            from_='Cbd',
            to='Embakasi',
            travelDate=(datetime.date.today() + datetime.timedelta(days=7)).strftime('%Y-%m-%d'),
            travelTime='10:00'
        ),
        Ticket(
            user_id=user_ids['alice@gmail.com'],
            vehicle_id=vehicle_ids['2'],
            busName='Isuzu',
            from_='CBD',
            to='Umoja',
            travelDate=(datetime.date.today() + datetime.timedelta(days=10)).strftime('%Y-%m-%d'),
            travelTime='15:00'
        ),
        Ticket(
            user_id=user_ids['bob@gmail.com'],
            vehicle_id=vehicle_ids['2'],
            busName='Isuzu',
            from_='CBD',
            to='Umoja',
            travelDate=(datetime.date.today() + datetime.timedelta(days=10)).strftime('%Y-%m-%d'),
            travelTime='15:00'
        )
    ]
    
    db.session.add_all(tickets)
    db.session.commit()

if _name_ == '_main_':
    with app.app_context():
        db.create_all()
        
        print("Seeding users...")
        user_ids = seed_users()
        
        print("Seeding vehicles...")
        vehicle_ids = seed_vehicles(user_ids)
        
        print("Seeding tickets...")
        seed_tickets(user_ids, vehicle_ids)
        
        print("Seeding completed.")