import React, {Component} from 'react';
import {Form, Input, Item, Text, View, Button} from "native-base";

class NameInputScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  submit = () => {
    this.props.navigation.navigate('InitialVehicles')
  }

  render() {
    return (
      <View>
        <Text>
          Input your name so that we can address you as a human, even though we're obviously not
        </Text>
        <Form>
          <Item>
            <Input placeholder="Your Name (or nickname)" />
          </Item>
        </Form>
        <Button onPress={this.submit}>
          <Text>Next</Text>
        </Button>
      </View>
    );
  }
}

NameInputScreen.propTypes = {};

export default NameInputScreen;
