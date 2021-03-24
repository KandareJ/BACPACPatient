import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const Survey = () => {
    return (
        <View style={styles.bg}>
            <WebView source={{ uri: 'http://www.example.com/' }} />
        </View>
    )
}

export default Survey;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})