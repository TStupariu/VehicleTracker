import React, {Component} from 'react';
import {SafeAreaView} from 'react-navigation';
import {Modal} from "react-native";
import {Form, Input, Item, Button, Text} from "native-base";

class AddVehicleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      make: '',
      model: '',
    }
  }

  handleChange(name, val) {
    this.setState({
      [name]: val,
    })
  }

  render() {
    const { visible, onSubmit } = this.props
    const { name, make, model } = this.state
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
      >
        <SafeAreaView>
          <Form>
            <Item>
              <Input placeholder='Name' onChangeText={(val) => this.handleChange('name', val)}/>
            </Item>
            <Item>
              <Input placeholder='Make' onChangeText={(val) => this.handleChange('make', val)}/>
            </Item>
            <Item>
              <Input placeholder='Model' onChangeText={(val) => this.handleChange('model', val)}/>
            </Item>
          </Form>
          <Button onPress={onSubmit(name, make, model)}>
            <Text>Submit</Text>
          </Button>
        </SafeAreaView>
      </Modal>
    );
  }
}

AddVehicleModal.propTypes = {};

export default AddVehicleModal;
