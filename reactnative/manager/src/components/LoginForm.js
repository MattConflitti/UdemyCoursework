import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        value={this.props.email}
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={this.props.password}
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }

    renderButton() {
        if(this.props.loading) {
            return(
                <Spinner size="large" />
            );
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log In/Register
            </Button>
        );
    }

    onButtonPress() {
        const { email,password } = this.props;
        this.props.loginUser({ email, password });
    }
}

const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;
    return {
        email,
        password,
        error,
        loading
    };
};


export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);