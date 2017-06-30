import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import RouterComponent from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyByImwcnstRp-xxxCzQ4CTeDH1pc_RFTPk",
            authDomain: "manager-1a31a.firebaseapp.com",
            databaseURL: "https://manager-1a31a.firebaseio.com",
            projectId: "manager-1a31a",
            storageBucket: "",
            messagingSenderId: "350591919573"
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <RouterComponent/>
            </Provider>
        );
    }
}

export default App;
