import React from "react";
import CustomeButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { authObj, createUserProfile } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, password, confirmPassword, email } = this.state;
    if (password !== confirmPassword) {
      alert("Passowrds do not match");
      return;
    }
    try {
      const { user } = await authObj.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfile(user, displayName);
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, password, confirmPassword, email } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Display Name"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <CustomeButton type="submit">SIGN UP</CustomeButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
