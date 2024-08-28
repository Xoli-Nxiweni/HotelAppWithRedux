import { FaRegUserCircle } from "react-icons/fa";
import { IoLogoWordpress } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import './NavBar.css';
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavBar = ({ onSignIn }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSignIn = () => {
    setIsSignedIn(!isSignedIn);
    onSignIn(); // Trigger the sign-in action in the Landing component
  };

  return (
    <>
      <div className='myNav'>
        <div className="logo">
          <a href="#"><IoLogoWordpress /></a>
        </div>
        <ul>
          <li><a href="#" onClick={() => console.log('im clicked')} className="active">Home</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>About Us</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>Rooms</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>Contact Us</a></li>
        </ul>
        <div className="userProfile">
          <a href="#">
            {isSignedIn ? 
              <FaRegUserCircle style={{ fontSize: '4em' }}/> 
              : 
              <div>
                <button className="authBtn" onClick={handleSignIn}>Sign In</button>
              </div>
            }
          </a>
          <div className="hamburger" onClick={toggleDrawer}>
            <FaBars />
          </div>
        </div>
      </div>
      
      <div className={`drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="closeDrawer" onClick={toggleDrawer}>
          <FaTimes />
        </div>
        <ul>
          <li><a href="#" onClick={() => console.log('im clicked')} className="active">Home</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>About Us</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>Rooms</a></li>
          <li><a href="#" onClick={() => console.log('im clicked')}>Contact Us</a></li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
