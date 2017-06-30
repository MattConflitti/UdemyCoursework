import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    renderButton() {
        if(this.state.loading) {
            return(
                <Spinner size="small" />
            );
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In/Register
            </Button>
        );
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed.',
            loading: false
        });
    }

    onButtonPress() {
        const { email,password } = this.state;
        this.setState({ error: '', loading: true });

        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email,password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});