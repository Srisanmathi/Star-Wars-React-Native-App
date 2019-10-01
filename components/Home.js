import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {
//for header
static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: 'white',
    },
    headerTintColor: 'black',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };


    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        const {navigate} = this.props.navigation;
        return (

            <View style={styles.background}>
                <Text style={styles.title}>STAR WARS!</Text>
                <View style={styles.image}>
                <Image source={require('../images/starWars.png')} />
                </View>
               
                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="Films"
                    type="solid"
                    onPress={() => navigate('Film')}
                />
                </View>
                
                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="People"
                    type="solid"
                    onPress={() => navigate('People')}
                />
                </View>

                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="Planets"
                    type="solid"
                    onPress={() => navigate('Planet')}
                />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    background:{
backgroundColor:"grey"
    },

title: {
    marginTop:20,
    marginLeft:100,
    fontSize: 30,
    fontWeight:"bold"
},    
image: {
    marginLeft:80,
    marginTop:20,
    marginBottom:20
},
button: {
    paddingVertical:20,
    paddingHorizontal:60
}

});