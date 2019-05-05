import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Title = props => {
    return (
        <View style={[styles.container, props.style]}>
            <View style={styles.viewTit}>
                <Text style={styles.titulo}>{props.title}</Text>
            </View>
            <View style={styles.viewSub}>
                <Text style={styles.subTitulo}>{props.subTitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 20,
    }, 
    viewTit: {
    },
    viewSub: {
        paddingBottom: 0
    },
    titulo: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 48,
        color: 'white',
        textAlign: 'center'
    },
    subTitulo: {
        fontFamily: 'Ubuntu-Regular',
        color: 'white',
        textAlign: 'center'
    }
})

export default Title