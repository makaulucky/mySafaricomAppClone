import React, { Component } from 'react'
import { Text, View,StyleSheet,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class TopBar extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                                
                <View style={styles.topbar}>                    
                    <Text style={styles.title}> Good Morning Lucky </Text>
                </View>
                <View style={styles.button}>
                    <Button
                    title="View my balances"
                    onPress={()=> alert('You pressed view my balance')}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

//create styles for this component
const styles= StyleSheet.create({
    container: {
        backgroundColor: "green",
        width:"100%",
        height:115,
        alignItems: "center",
        marginTop: 2,

    },
    title: {
        fontSize: 24,
        padding: 15,
        },
    button: {
        backgroundColor: "white",
        fontSize: 24,

    },

    topbar: {
        marginTop:3,
    },
});
