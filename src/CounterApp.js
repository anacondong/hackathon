import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { connect } from 'react-redux'

class CounterApp extends Component {

    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Increase</Text>
                    </TouchableOpacity>
                    
                    <Text style={{ fontSize: 20 }}>{this.props.counter}</Text>
                    
                    <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                        <Text style={{ fontSize: 20 }}>Decrease</Text>
                    </TouchableOpacity>


                    {/* <Text style={{ fontSize: 20 }}>{this.props.user}</Text>
                    <TouchableOpacity onPress={() => this.props.setUser({name:'dong'})}>
                        <Text style={{ fontSize: 20 }}>set user dong</Text>
                    </TouchableOpacity> */}

                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        // user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
        // setUser: (action) => dispatch({ type: 'SET_USER' , user: action.user}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
