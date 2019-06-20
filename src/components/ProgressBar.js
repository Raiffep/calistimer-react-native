import React from 'react'
import { View, StyleSheet } from 'react-native'

const ProgressBar = props => {
    const { color, percentage, height } = props
    return (
        <View>
            <View style={{
                width: percentage ? percentage+'%' : '1%',
                backgroundColor: color ? color : 'white',
                height: height ? height : 3
                }}
            />
        </View>
    )
}

/*const styles = StyleSheet.create({    
    pBar: {
        width: percentage ? percentage : '1',
        backgroundColor: color ? color : 'white',
        height: height ? height : 3,
    }
})*/

export default ProgressBar