import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'

const HomeScreen = props => {
    return (
        <View style={styles.container}>          
            <View style={styles.box1}>
                <Text style={styles.logo}>CalisTimer</Text>
            </View>        
            <View style={styles.box2}>
                <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>Isometria</Button>
            </View>
            <View style={styles.box3}>                     
                <Button style={styles.btn} onPress={() => props.navigation.navigate('AMRAP')}>AMRAP</Button>                
            </View>             
            <View style={styles.box4}>
                <Button style={styles.btn} onPress={() => props.navigation.navigate('EMOM')}>EMOM</Button>                                     
            </View>
            <View style={styles.footer}>
                <Text style={styles.textF}>by Raiffe Pontes</Text>
            </View>              
                                              
        </View>
    )
}
HomeScreen.navigationOptions = {
    header: null,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column', 
    },
    box1: {
        //bottom: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
        height: '30%',
        backgroundColor: '#D6304A',        
        shadowColor: 'rgba(1, 1, 1, 1)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 8,
    },
    
    box2: {
        alignSelf: 'center',
        top: '-14%',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '103%',
        height: '50%',
        shadowColor: 'rgba(1, 1, 1, 1)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 8,
        marginTop: -10,
    },

    box3: {
        alignSelf: 'center',
        top: '-74%',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '103%',
        height: '50%',
        shadowColor: '#111',
        shadowOffset: {width: 5, heightBottom: 5},
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 8,
        marginTop: -10,
    },

    box4: {
        alignSelf: 'center',
        top: '-134%',
        backgroundColor: 'transparent',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '103%',
        height: '50%',
        shadowColor: 'rgba(1, 1, 1, 1)',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.9,
        shadowRadius: 2,
        elevation: 8,
        marginTop: -10,
    },

    logo: {         
        fontFamily: 'Ubuntu-Bold', 
        fontSize: 48, 
        textAlign: 'center',
        color: 'white',
        marginTop: 70,
        marginBottom: 70,
        textShadowColor: 'rgba(0, 0, 0, 0.15)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        paddingTop: '5%',
    },
    btn: {
        padding: '13%',
        marginTop: 0,     
    },

    footer: {
        top: '95%',
        position: 'absolute',
        backgroundColor: 'transparent',
        alignSelf: 'center',
        marginBottom: 5,
    },

    textF: {
        color: '#D6304A',
        textAlign: 'center',
    }
})
export default HomeScreen