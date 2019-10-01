import React, { Component } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

export default class People extends Component {

  //for header
  static navigationOptions = {
    title: 'People',
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
      people: []
    }
  }

  componentDidMount() {

    this.setState({ loading: 'true' });
    const apiUrl = 'https://swapi.co/api/people/';
    this.loadData(apiUrl);

  }

  loadData(apiUrl) {

    let temp = [];
    fetch(apiUrl)

      .then((r) => r.json())

      .then((json) => {
        
        for (let i = 0; i < json.results.length; i++) {
          let people = {
            name: json.results[i].name,
            height: json.results[i].height,
            mass: json.results[i].mass,
            hair_color: json.results[i].hair_color,
            gender: json.results[i].gender,
          }

          temp.push(people);
        }

        this.setState({
          people: temp,
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
          data={this.state.people}
          renderItem={({ item }) => (
            <Card
          title={item.title}
        >
          <Text style={styles.entry}>NAME                :  {item.name}</Text>
                  <Text style={styles.entry}>HEIGHT             :  {item.height}</Text>
                  <Text style={styles.entry}>MASS                :  {item.mass}</Text>
                  <Text style={styles.entry}>HAIR COLOR     :  {item.hair_color}</Text>
                  <Text style={styles.entry}>GENDER            :  {item.gender}</Text>
                 
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