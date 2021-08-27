import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default class TopBar extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.topbar}>
                    <View  />
                    <Text style={styles.title}> Good Morning Lucky </Text>
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
        height:70,
        alignItems: "center",
        marginTop: 2,

    },
    title: {
        fontSize: 20,
    },

    topbar: {
        fontSize:20,
    },
});
