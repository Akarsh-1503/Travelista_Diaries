import React, { useState } from 'react';
import './index.css';

const Signup = () => {
  const [display, setDisplay] = useState(false);

  return (
    <div className="container">
      <div className={!display?"signin":"main"}>
        <button className="sign" onClick={() => setDisplay(true)} style={{ background: "#24bc89" }} >
          Sign Up
        </button>
        <button className="sign" onClick={() => setDisplay(false) } style={{ background: "#24bc89" }}>
          Sign In
        </button>
      </div>
      <div>
        {display ? (
          <>
            <h1 className="title">Sign Up</h1>
            <div>
              <div className="name_cont">
                <input placeholder="First Name" className="name" />
                <input placeholder="Last Name" className="name" />
              </div>
              <div className="name_cont">
                <input placeholder="Email" className="otherfield" />
              </div>
              <div className="name_cont">
                <input placeholder="Password" type ="password" className="otherfield" />
              </div>
              <button className="login">Sign Up</button>
            </div>
          </>
        ) : (
          <>
            <h1 className="title">Sign In</h1>
            <div>
              <div className="name_cont">
                <input placeholder="Email" className="otherfield" />
              </div>
              <div className="name_cont">
                <input placeholder="Password" type="password" className="otherfield" />
              </div>
              <button className="login">Sign In</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;


