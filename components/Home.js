import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Home extends Component {



    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {



    }


    render() {

        const {navigate} = this.props.navigation;
        return (

            <View>
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

                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="Spaceships"
                    type="solid"
                    onPress={() => navigate('Spaceship')}
                />
                </View>
                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="Vehicles"
                    type="solid"
                    onPress={() => navigate('Vehicle')}
                />
                </View>
                <View style={styles.button}>
                <Button style={{ paddingTop: 50 }}
                    title="Species"
                    type="solid"
                    onPress={() => navigate('Species')}
                />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
button: {
    paddingVertical:30,
    paddingHorizontal:60
}

});