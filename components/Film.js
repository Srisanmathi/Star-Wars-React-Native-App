import React, { Component } from 'react';
import { Text, StyleSheet, FlatList } from 'react-native'
import { Card } from 'react-native-elements'

export default class Film extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      loading: 'initial',
      film: []
    }
  }

  componentDidMount() {

    this.setState({ loading: 'true' });
    const apiUrl = 'https://swapi.co/api/films/';
    this.loadData(apiUrl);

  }

  loadData(apiUrl) {

    let temp = [];
    fetch(apiUrl)

      .then((r) => r.json())

      .then((json) => {

        for (let i = 0; i < json.count; i++) {

          let film = {
            title: json.results[i].title,
            episode_id: json.results[i].episode_id,
            opening_crawl: json.results[i].opening_crawl,
            director: json.results[i].director,
            producer: json.results[i].producer,
            release_date: json.results[i].release_date
          }

          temp.push(film);
        }

        this.setState({
          film: temp,
          loading: "false"
        })

      }).catch((error) => {

        console.log('Api call failed. Check your internet connection');

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

    return (
      
        <FlatList
          extraData={this.state}
          data={this.state.film}
          renderItem={({ item }) => (
            <Card
          title={item.title}
        >
          <Text style={styles.entry}>EPISODE ID            :  {item.episode_id}</Text>
                  <Text style={styles.entry}>DIRECTOR              :  {item.director}</Text>
                  <Text style={styles.entry}>PRODUCER            :  {item.producer}</Text>
                  <Text style={styles.entry}>RELEASE DATE     :  {item.release_date}</Text>
                  <Text style={styles.entry}>{`OPENING CRAWL : 

      ${item.opening_crawl}`}</Text>
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