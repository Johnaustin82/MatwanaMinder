// import React, { useState } from 'react';
// import './ProfilePage.css';

// const ProfilePage = () => {
//     const [profile, setProfile] = useState({
//         name: 'John Doe',
//         phone: '123-456-7890',
//         email: 'johndoe@example.com',
//         role: 'passenger',
//         photo: null
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile({ ...profile, [name]: value });
//     };

//     const handleFieldClick = (e) => {
//         e.target.removeAttribute('readonly');
//         e.target.focus();
//     };

//     const handleFieldBlur = (e) => {
//         e.target.setAttribute('readonly', true);
//         console.log('Profile updated:', profile);
//     };

//     const handlePhotoChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setProfile({ ...profile, photo: reader.result });
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     return (
//         <div className="profile-container">
//             <div className="profile-header">
//                 <div className="profile-photo">
//                     {profile.photo ? (
//                         <img src={profile.photo} alt="Profile" />
//                     ) : (
//                         <span>P</span>
//                     )}
//                 </div>
//                 <h2>Profile</h2>
//                 <input 
//                     type="file" 
//                     id="photoUpload" 
//                     accept="image/*" 
//                     onChange={handlePhotoChange} 
//                     style={{ display: 'none' }}
//                 />
//                 <button
//                     className="edit-photo-button"
//                     onClick={() => document.getElementById('photoUpload').click()}
//                 >
//                     Edit Profile Photo
//                 </button>
//             </div>
//             <div className="profile-details">
//                 <form>
//                     <label>
//                         Name:
//                         <input
//                             type="text"
//                             name="name"
//                             value={profile.name}
//                             onChange={handleChange}
//                             readOnly
//                             onClick={handleFieldClick}
//                             onBlur={handleFieldBlur}
//                         />
//                     </label>
//                     <label>
//                         Phone:
//                         <input
//                             type="text"
//                             name="phone"
//                             value={profile.phone}
//                             onChange={handleChange}
//                             readOnly
//                             onClick={handleFieldClick}
//                             onBlur={handleFieldBlur}
//                         />
//                     </label>
//                     <label>
//                         Email:
//                         <input
//                             type="email"
//                             name="email"
//                             value={profile.email}
//                             onChange={handleChange}
//                             readOnly
//                             onClick={handleFieldClick}
//                             onBlur={handleFieldBlur}
//                         />
//                     </label>
//                     <label>
//                         Role:
//                         <select
//                             name="role"
//                             value={profile.role}
//                             onChange={handleChange}
                            
//                             onClick={handleFieldClick}
//                             onBlur={handleFieldBlur}
//                         >
//                             <option value="passenger">Passenger</option>
//                             <option value="operator">Operator</option>
//                         </select>
//                     </label>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: 'John Doe',
    phone: '123-456-7890',
    email: '',
    role: '',
    photo: null,
  });

  useEffect(() => {
    // Retrieve email and role from localStorage
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    const photo = localStorage.getItem('profilePhoto');

    if (email && role) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        email,
        role,
        photo,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedProfile = { ...profile, [name]: value };
    setProfile(updatedProfile);
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  };

  const handleFieldClick = (e) => {
    e.target.removeAttribute('readonly');
    e.target.focus();
  };

  const handleFieldBlur = (e) => {
    e.target.setAttribute('readonly', true);
    console.log('Profile updated:', profile);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedProfile = { ...profile, photo: reader.result };
        setProfile(updatedProfile);
        localStorage.setItem('profilePhoto', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    // Clear the localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('profilePhoto');
    
    // Redirect to the login page
    navigate('/');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-photo">
          {profile.photo ? (
            <img src={profile.photo} alt="Profile" />
          ) : (
            <span>P</span>
          )}
        </div>
        <h2>Profile</h2>
        <input
          type="file"
          id="photoUpload"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: 'none' }}
        />
        <button
          className="edit-photo-button"
          onClick={() => document.getElementById('photoUpload').click()}
        >
          Edit Profile Photo
        </button>
      </div>
      <div className="profile-details">
        <form>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              readOnly
              onClick={handleFieldClick}
              onBlur={handleFieldBlur}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              readOnly
            />
          </label>
          <label>
            Role:
            <input
              type="text"
              name="role"
              value={profile.role}
              readOnly
            />
          </label>
        </form>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;

