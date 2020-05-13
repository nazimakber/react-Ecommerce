import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { authObj } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <Link className="option" onClick={() => authObj.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link className="option" to="/Signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;
