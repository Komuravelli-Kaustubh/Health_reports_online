import React from 'react';

const Profile = () => {
  console.log("At profile component");

  const profileStyles = {
    container: {
      color: '#333',
      padding: '20px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    text: {
      color: '#555',
    },
  };

  return (
    <div style={profileStyles.container}>
      <h1 style={profileStyles.heading}>Profile</h1>
      {/* Add other profile content */}
      <p style={profileStyles.text}>
        This is some example text in the Profile component.
      </p>
    </div>
  );
};

export default Profile;