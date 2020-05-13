import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { Route, Link } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import { authObj, createUserProfile } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicList = (props) => {
  return (
    <div>
      <h1>TOPIC LIST</h1>
      <Link to={`${props.match.url}/13`}>Link 13</Link>
      <br />
      <Link to={`${props.match.url}/14`}>Link 14</Link>
      <br />
      <Link to={`${props.match.url}/15`}>Link 15</Link>
      <br />
      <Link to={`${props.match.url}/16`}>Link 16</Link>
    </div>
  );
};

const TopicDetail = (props) => {
  return (
    <div>
      <h1>Topic detail page:{props.match.params.topicId}</h1>
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribFormAuth = null;

  componentDidMount() {
    this.unsubscribFormAuth = authObj.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => console.log(this.state.currentUser)
          );
        });
        console.log(this.state);
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribFormAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        {/* <Route path="/hats" component={HatsPage} /> */}
        {/* <Route path="/topiclist/:topicId" component={TopicDetail} />
      <Route path="/topiclist" component={TopicList} /> */}
        <switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/Signin" component={SignInSignUpPage} />
        </switch>
        {/* <HomePage></HomePage> */}
      </div>
    );
  }
}

export default App;
