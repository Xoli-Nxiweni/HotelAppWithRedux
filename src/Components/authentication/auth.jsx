// import { useState } from "react";

// const Auth = () => {

//     const [isRegistered, setIsRegistered] = useState(false);
//     return (
//       <div>
//         <div className="myForm">
//             <h1>
//                 {!isRegistered ? 'Sign In' : 'Sign Up'}
//             </h1>
//             <form action="">
//                 <input type="text" />
//                 <input type="password" />
//                 <input type="password" /> //only show this when the user clicks on the sign up link
//                 <button>
//                 {!isRegistered ? 'Sign In' : 'Sign Up'}
//                 </button>
//                 <p>New User? Sign up <span onClick={}>here!</span></p>
//             </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Auth;
  
// import { useState } from "react";
// import './auth.css'

// const Auth = () => {
//   const [isRegistered, setIsRegistered] = useState(false);

//   const toggleForm = () => {
//     setIsRegistered(!isRegistered);
//   };

//   return (
//     <div className="formControl" >
//       <div className="myForm">
//         <h1>{isRegistered ? 'Sign Up' : 'Sign In'}</h1>
//         <form action="">
//             <button>Continue with Google</button>
//             <span>--or--</span>
//           <input type="text" placeholder="Username" required />
//           <input type="password" placeholder="Password" required />
//           {isRegistered && (
//             <input type="password" placeholder="Confirm Password" required />
//           )}
//           <button type="submit">
//             {isRegistered ? 'Sign Up' : 'Sign In'}
//           </button>
//         <p>
//           {isRegistered
//             ? 'Already have an account? '
//             : 'New User? '}
//           <span onClick={toggleForm} style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
//             {isRegistered ? 'Sign In here!' : 'Sign Up here!'}
//           </span>
//         </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import { useState } from "react";
// import './auth.css';

// const Auth = () => {
//   const [isRegistered, setIsRegistered] = useState(false);

//   const toggleForm = () => {
//     setIsRegistered(!isRegistered);
//   };

//   return (
//     <div className="auth-container">
//       <div className={`auth-box ${isRegistered ? 'register' : 'signin'}`}>
//         <div className="auth-form">
//           <h1>{isRegistered ? 'Sign Up' : 'Sign In'}</h1>
//           <form action="">
//             <button className="google-btn">Continue with Google</button>
//             <span className="divider">--or--</span>
//             <input type="text" placeholder="Username" required />
//             <input type="password" placeholder="Password" required />
//             {isRegistered && (
//               <input type="password" placeholder="Confirm Password" required />
//             )}
//             <p>Remember me? <input type="checkbox" /></p>
//             <button type="submit" className="submit-btn">
//               {isRegistered ? 'Sign Up' : 'Sign In'}
//             </button>
//           </form>
//           <p>
//             {isRegistered ? 'Already have an account? ' : 'New User? '}
//             <span onClick={toggleForm} className="toggle-link">
//               {isRegistered ? 'Sign In here!' : 'Sign Up here!'}
//             </span>
//           </p>
//         </div>
//         <div className="auth-info">
//           {/* <h2>{isRegistered ? 'Welcome Back!' : 'Join Us Today!'}</h2>
//           <p>{isRegistered ? 'Sign in to access your account.' : 'Sign up to create a new account.'}</p> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;


// import { useState } from "react";
// import './auth.css';

// const Auth = () => {
//   const [isRegistered, setIsRegistered] = useState(false);

//   const toggleForm = () => {
//     setIsRegistered(!isRegistered);
//   };

//   return (
//     <div className="auth-container">
//       <div className={`auth-box ${isRegistered ? 'register' : 'signin'}`}>
//         <div className="auth-form">
//           <h1>{isRegistered ? 'Sign Up' : 'Sign In'}</h1>
//           <form action="">
//             {!isRegistered && (
//               <>
//                 <button className="google-btn">Continue with Google</button>
//                 <span className="divider">--or--</span>
//               </>
//             )}
//             <input type="text" placeholder="Username" required />
//             <input type="password" placeholder="Password" required />
//             {isRegistered && (
//               <input type="password" placeholder="Confirm Password" required />
//             )}
//             {!isRegistered && (
//               <p>
//                 Remember me? <input type="checkbox" />
//               </p>
//             )}
//             <button type="submit" className="submit-btn">
//               {isRegistered ? 'Sign Up' : 'Sign In'}
//             </button>
//           </form>
//           <p>
//             {isRegistered ? 'Already have an account? ' : 'New User? '}
//             <span onClick={toggleForm} className="toggle-link">
//               {isRegistered ? 'Sign In here!' : 'Sign Up here!'}
//             </span>
//           </p>
//         </div>
//         <div className="auth-info">
//           {/* Additional content can go here if needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// // Auth.js
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser, logoutUser, clearError } from "../../Redux/Slices/authSlice";
// import './auth.css';

// const Auth = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [isRegistered, setIsRegistered] = useState(false);

//   const dispatch = useDispatch();
//   const authState = useSelector((state) => state.auth);

//   const toggleForm = () => {
//     setIsRegistered(!isRegistered);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isRegistered) {
//       if (password === confirmPassword) {
//         dispatch(loginUser({ email, password }));
//       } else {
//         alert('Passwords do not match');
//       }
//     } else {
//       dispatch(loginUser({ email, password }));
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className={`auth-box ${isRegistered ? 'register' : 'signin'}`}>
//         <div className="auth-form">
//           <h1>{isRegistered ? 'Sign Up' : 'Sign In'}</h1>
//           <form onSubmit={handleSubmit}>
//             {!isRegistered && (
//               <button className="google-btn">Continue with Google</button>
//             )}
//             <span className="divider">--or--</span>
//             <input
//               type="text"
//               placeholder="Username"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {isRegistered && (
//               <input
//                 type="password"
//                 placeholder="Confirm Password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             )}
//             {authState.error && <p className="error">{authState.error}</p>}
//             <button type="submit" className="submit-btn">
//               {isRegistered ? 'Sign Up' : 'Sign In'}
//             </button>
//             <p>
//               {isRegistered ? 'Already have an account? ' : 'New User? '}
//               <span onClick={toggleForm} className="toggle-link">
//                 {isRegistered ? 'Sign In here!' : 'Sign Up here!'}
//               </span>
//             </p>
//           </form>
//         </div>
//         <div className="auth-info">
//           {/* Additional information or imagery */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;


import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, clearError } from "../../Redux/Slices/authSlice";
import './auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
    dispatch(clearError()); // Clear error when toggling forms
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistered) {
      if (password === confirmPassword) {
        dispatch(loginUser({ email, password }));
      } else {
        alert('Passwords do not match');
      }
    } else {
      dispatch(loginUser({ email, password }));
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-box ${isRegistered ? 'register' : 'signin'}`}>
        <div className="auth-form">
          <h1>{isRegistered ? 'Sign Up' : 'Sign In'}</h1>
          <form onSubmit={handleSubmit}>
            {!isRegistered && (
              <button type="button" className="google-btn">Continue with Google</button>
            )}
            {!isRegistered && <span className="divider">--or--</span>}
            <input
              type="text"
              placeholder="Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {isRegistered && (
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            {authState.error && <p className="error">{authState.error}</p>}
            <button type="submit" className="submit-btn">
              {isRegistered ? 'Sign Up' : 'Sign In'}
            </button>
            <p>
              {isRegistered ? 'Already have an account? ' : 'New User? '}
              <span onClick={toggleForm} className="toggle-link">
                {isRegistered ? 'Sign In here!' : 'Sign Up here!'}
              </span>
            </p>
          </form>
        </div>
        <div className="auth-info">
          {/* Additional content or imagery */}
        </div>
      </div>
    </div>
  );
};

export default Auth;

