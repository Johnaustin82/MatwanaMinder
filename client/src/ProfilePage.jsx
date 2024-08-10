import React, { useState } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        phone: '123-456-7890',
        email: 'johndoe@example.com',
        age: '30',
        location: 'New York, USA',
        photo: 'https://via.placeholder.com/100'
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setProfile({ ...profile, photo: e.target.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
        // Add logic to save the profile details to your backend here
        console.log('Profile saved:', profile);
    };

    return (
        <div className="profile-container">
            <div className="sidebar">
                <div className="profile-picture">
                    <img src={profile.photo} alt="Profile" />
                    {isEditing && <input type="file" onChange={handlePhotoChange} />}
                </div>
                <button onClick={handleEditToggle}>
                    {isEditing ? 'Cancel' : 'Edit Profile'}
                </button>
                {isEditing && <button onClick={handleSave}>Save</button>}
            </div>
            <div className="profile-details">
                <form onSubmit={handleSave}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={profile.name}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <label>
                        Phone
                        <input
                            type="text"
                            name="phone"
                            value={profile.phone}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={profile.email}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <label>
                        Age
                        <input
                            type="number"
                            name="age"
                            value={profile.age}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                            name="location"
                            value={profile.location}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </label>
                    {isEditing && <button type="submit">Save</button>}
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
            
               