import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {

    state = {
        loggedIn: null
    };

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBTOVObFv--U3vfrFeeLj-i6HvMvt9ta0o",
            authDomain: "authentication-8084b.firebaseapp.com",
            databaseURL: "https://authentication-8084b.firebaseio.com",
            storageBucket: "authentication-8084b.appspot.com",
            messagingSenderId: "441575706028"
        };
        firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button
                            onPress={() => firebase.auth().signOut()}
                        >
                            Log out
                        </Button>
                    </View>
                );
                break;
            case false:
                return (
                    <LoginForm />
                );
                break;
            default:
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Spinner size="large" />
                    </View>
                );

        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}