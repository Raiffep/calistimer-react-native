import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const Button = props => {
    return(
        <TouchableOpacity style={props.style}  onPress={props.onPress}>
            <Text style={styles.text}>{props.children}</Text>
        </TouchableOpacity>
        )
}
const styles = StyleSheet.create({
    text: {  
        color:'#D6304A', 
        fontFamily: 'Ubuntu-Regular',
        textAlign: 'center', 
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: 260,
     }
})

export default Button