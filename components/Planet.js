import React, { Component } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

export default class Planet extends Component {

  //for header
  static navigationOptions = {
    title: 'Planets',
    headerStyle: {
      backgroundColor: '#00bfff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: 'initial',
      planet: []
    }
  }

  componentDidMount() {

    this.setState({ loading: 'true' });
    const apiUrl = 'https://swapi.co/api/planets/';
    this.loadData(apiUrl);

  }

  loadData(apiUrl) {

    let temp = [];
    fetch(apiUrl)

      .then((r) => r.json())

      .then((json) => {

        for (let i = 0; i < json.results.length; i++) {

          let planet = {
            name: json.results[i].name,
            rotation_period: json.results[i].rotation_period,
            climate: json.results[i].climate,
            gravity: json.results[i].gravity,
            terrain: json.results[i].terrain,
            population: json.results[i].rpopulation
          }

          temp.push(planet);
        }

        this.setState({
          planet: temp,
          loading: "false"
        })

      }).catch((error) => {
        this.setState({ loading: 'failed' });
        console.log('Api call failed.');

      });

  }

  render() {
    if (this.state.loading === 'initial') {
      console.log('Initializing the DOM');
      return <Text>Intializing...</Text>;

    }

    if (this.state.loading === 'true') {
      console.log('Loading data from the API');
      return <Text style={styles.loading}>Loading...</Text>;
    }

    if (this.state.loading === 'failed') {
        console.log('Api call failed.');
        return <Text style={styles.loading}>API call failed. Try again later!</Text>;
      }

    return (
      
        <FlatList
          extraData={this.state}
          data={this.state.planet}
          renderItem={({ item }) => (
            <Card
          title={item.title}
        >
          <Text style={styles.entry}>NAME            :  {item.name}</Text>
                  <Text style={styles.entry}>ROTATION     :  {item.rotation_period}</Text>
                  <Text style={styles.entry}>CLIMATE       :  {item.climate}</Text>
                  <Text style={styles.entry}>GRAVITY      :  {item.gravity}</Text>
                  <Text style={styles.entry}>TERRAIN      :  {item.terrain}</Text>
                  
</Card>

          )}
          numColumns={1}
          keyExtractor={(item, index) => index.toString()}
        //creates problem while deleting. Give a unique key then
        />
)
}
}

const styles = StyleSheet.create({

  loading: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 23,
    fontWeight: "bold"
  },

  entry: {
    marginBottom: 5
  }
});