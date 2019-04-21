import React, {Component} from 'react'
import AppContext from "../context";
import Login from "../modules/login/Login";

class LoginScreen extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {
          () => <Login/>
        }
      </AppContext.Consumer>
    )
  }
}


LoginScreen.propTypes = {};

export default LoginScreen;
