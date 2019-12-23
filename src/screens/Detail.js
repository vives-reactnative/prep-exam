import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Axios from 'axios';
import Name from '../components/Name';

class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: {}
      }
    };
  }

  componentDidMount = () => {
    Axios.get('https://randomuser.me/api/').then(resp => {
      console.log(resp.data);
      this.setState({ user: resp.data.results[0] });
    });
  };

  render() {
    const { user } = this.state;

    return (
      <View style={styles.container}>
        <Name name={`${user.name.first} ${user.name.last}`} />
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default DetailScreen;
