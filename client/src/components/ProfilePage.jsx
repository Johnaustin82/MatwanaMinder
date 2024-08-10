import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        age: '30',
        location: 'New York, USA'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
        console.log('Profile saved:', profile);
       
    };

    return (
        <div className="profile-container">
            <div className="sidebar">
                <button onClick={handleEditToggle}>
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>
            <div className="profile-details">
                <form onSubmit={handleSave}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <br />
                    <label>
                        Phone:
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={profile.age}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input
                            type="text"
                            name="location"
                            value={profile.location}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <br />
                    {isEditing && <button type="submit">Save</button>}
                </form>
                <div className="profile-summary">
                    <h3>Profile Summary:</h3>
                    <p>Name: {profile.name}</p>
                    <p>Phone: {profile.phone}</p>
                    <p>Email: {profile.email}</p>
                    <p>Age: {profile.age}</p>
                    <p>Location: {profile.location}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;