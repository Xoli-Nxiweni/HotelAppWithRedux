import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Auth from "../authentication/auth"; // Import the Auth component

const Landing = () => {
  const [onSignIn, setSignIn] = useState(false);

  const handleSignIn = () => {
    setSignIn(true);
  };

  return (
    <div>
      <NavBar onSignIn={handleSignIn} />
      {onSignIn ? <Auth /> : <></>} {/* Conditionally render Auth or the default content */}
    </div>
  );
};

export default Landing;
