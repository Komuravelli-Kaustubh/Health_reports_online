import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Login = () => {
  const backgroundStyle = {
    backgroundImage: "url('https://wallpaperaccess.com/full/958470.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(6px)',
    zIndex: 0,
  };

  const contentStyle = {
    zIndex: 1,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
  };
  const [formObj, setFormObj] = useState({ username: "", password: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formObj);

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp);
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        console.log("Successfully logged in");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn("Invalid username or password");
      }
    } catch (error) {
      console.log("Error while logging in");
      console.log(error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  const Error = () => (
    <div className="alert alert-danger" role="alert">
      {errorLoggingIn}
    </div>
  );

  return (
    <div  style={backgroundStyle}>
      <div style={blurOverlayStyle}></div>
    <div className="d-flex justify-content-center align-items-center ">

      <div className="card p-4 " style={{ backgroundColor: 'rgba(220, 220, 220, 0.76)' ,maxWidth: "400px", width: "100%", background: '#EAEAEA' ,marginTop:'10%'}}>
        <h1 className="mb-4 text-3xl font-extrabold text-primary md:text-5xl lg:text-5xl pb-2 flex items-center">Login</h1>
        <form onSubmit={handleSubmit}>
          {errorLoggingIn && <Error />}
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-dark">
              Email
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="username"
              name="username"
              value={formObj.username}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-dark">
              Password
            </label>
            <input
              type="password"
              className="form-control form-control-sm"
              id="password"
              name="password"
              value={formObj.password}
              onChange={changeHandler}
            />
          </div>
          <button type="submit" className="mt-3 text-light bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-s px-4 py-2.5 text-center inline-flex items-center me-2 mb-2">
            Submit
          </button>
          <div className="mt-3 text-center">
            <span>New user? </span>

          <Link  className='text-primary 'to="/signup">Register here</Link>
          </div>

        </form>
        {loggedIn && <div className="alert alert-success mt-3">Successfully logged in! Redirecting to home...</div>}
      </div>
    </div>
    </div>
  );
};

export default Login;
