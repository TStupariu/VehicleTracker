import React, {Component} from 'react';
import AppContext from "../../context";
import {auth} from "../../firebase";
import {SafeAreaView} from "react-navigation";
import {Button, Form, Input, Item, Text} from "native-base";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: null,
    };
  }

  componentDidMount() {
    console.log('>>>', this)
  }

  handleRegister = async () => {
    const {email, password} = this.state;
    if (email && password) {
      try {
        const response = await auth.createUserWithEmailAndPassword(email, password)
        console.log(response)
        console.log(auth.currentUser)
        this.props.navigation.navigate('Onboarding')
      } catch (err) {
        this.setState({
          error: err,
        })
      }
    }
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    })
  }

  render() {
    const {error} = this.state;
    return (

            <SafeAreaView>
              <Form>
                <Item>
                  <Input
                    placeholder="Email"
                    onChangeText={val => this.handleChange('email', val)}
                    keyboardType='email-address'
                    autoCapitalize='none'
                  />
                </Item>
                <Item>
                  <Input
                    placeholder="Password"
                    onChangeText={val => this.handleChange('password', val)}
                    secureTextEntry
                  />
                </Item>
              </Form>
              {
                error
                  ? <Text>Something went wrong. Please try again!</Text>
                  : null
              }
              <Button>
                <Text>Log In</Text>
              </Button>
              <Button onPress={this.handleRegister}>
                <Text>Register</Text>
              </Button>
            </SafeAreaView>
          )


  }
}

Login.propTypes = {};

export default Login;
