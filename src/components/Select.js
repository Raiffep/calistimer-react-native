import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Select extends Component {
    state = {
        current: ''
    }

    componentDidMount(){
        this.setState({
            current: this.props.current
        })
    }
    handlePress = opt => () => {
        this.setState({
            current: opt
        })
        if(this.props.onSelect){
            this.props.onSelect(opt)
        }
    }
    render() {
        const { options, label } = this.props
        const { current } = this.state
        return (
            <View>
                <Text style={styleSelect.label}>{label}</Text>
                <View style={styleSelect.viewOpt}>
                {options.map(opt => {
                    let id = ''
                    let label = ''
                    if(typeof opt === 'string') {
                        id = opt
                        label = opt
                    }else if(typeof opt === 'object') {
                        id = opt.id
                        label = opt.label
                    }
                    return (
                        <TouchableOpacity 
                            key={id} 
                            style={[
                                    styleSelect.opt, 
                                    id === current ? styleSelect.optSelected : null
                                ]}
                            onPress={this.handlePress(id)}
                            >
                            <Text style={styleSelect.optLabel}>{label}</Text>
                        </TouchableOpacity>
                    )
                })}
                </View>
            </View>
        )
    }
}   

const styleSelect = StyleSheet.create({
    label: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
    },

    viewOpt: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
    },

    opt: {
        padding: 4,
    },

    optSelected: {
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 8,
    },
    
    optLabel: {
        color: 'white',
        fontFamily: 'Ubuntu-Regular',
        fontSize: 24,
        opacity: 1,
    }
})

    export default Select