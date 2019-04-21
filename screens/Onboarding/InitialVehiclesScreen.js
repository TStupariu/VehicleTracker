import React, {Component} from 'react';
import {List, ListItem, Text, View, Button} from "native-base";
import AddVehicleModal from "../../components/AddVehicleModal";

class InitialVehiclesScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      modalVisible: false,
    };
  }

  renderVehicleItem(item) {
    const {
      name, make, model
    } = item

    return (
      <ListItem>
        <Text>{name}</Text>
        <Text>{make}</Text>
        <Text>{model}</Text>
      </ListItem>
    )
  }

  openAddVehicle = () => {
    this.setState({
      modalVisible: true,
    })
  }

  addVehicle = (name, make, model) => () => {
    this.setState(state => {
      const {vehicles} = state;
      vehicles.push({name, make, model});
      return ({
        modalVisible: false,
        vehicles,
      })
    })
  }

  render() {
    const { vehicles, modalVisible } = this.state;
    return (
      <View>
        <Text>Add in your initial list of vehicles</Text>
        <Button onPress={this.openAddVehicle}>
          <Text>Add Vehicle</Text>
        </Button>
        <AddVehicleModal
          visible={modalVisible}
          onSubmit={this.addVehicle}
        />
        <List>
          {
            vehicles.map(item => this.renderVehicleItem(item))
          }
        </List>
      </View>
    );
  }
}

InitialVehiclesScreen.propTypes = {};

export default InitialVehiclesScreen;
