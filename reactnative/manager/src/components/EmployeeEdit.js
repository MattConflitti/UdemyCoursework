import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/EmployeeActions';
import { Button, Card, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    constructor() {
        super();

        this.state = {
            modalVisible: false
        };
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onFirePress() {
        this.setState({ modalVisible: true });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    onDecline() {
        this.setState({ modalVisible: false });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        SMS Employee
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onFirePress.bind(this)}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.modalVisible}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to fire this employee?
                </Confirm>
            </Card>
        );
    }
}


const mapStateToProps = ({ employeeForm }) => {
    const { name, phone, shift } = employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);