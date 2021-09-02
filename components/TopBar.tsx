import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class TopBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>                                
                <View style={styles.topbar}>                    
                    <Text style={styles.title}> Good Morning Lucky </Text>
                </View>
                <View style={styles.button}>
                    <Button
                    title="View my balances"
                    onPress={()=> alert('You pressed view my balance')}
                    />
                </View>
            </View>
            </View>
        )
    }
}

//create styles for this component
const styles= StyleSheet.create({
    container: {
        backgroundColor: "green",        
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10,
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title: {
        fontSize: 24,
        },
    button: {
        marginTop: 20,
        marginBottom: 20,
        padding: 0,
    },

    topbar: {
        marginTop:3,
    },
});
