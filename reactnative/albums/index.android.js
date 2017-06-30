// android

//import library for component
import React from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: 'red'
    }
});

//render component to device
AppRegistry.registerComponent('albums', () => App);