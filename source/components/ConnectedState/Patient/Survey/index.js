import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import TopBar from '../../../SharedComponents/TopBar';

const Survey = ({navigation, uri}) => {
    return (
        <TopBar title={"Survey"} onMenuPress={navigation.toggleDrawer}>
            <WebView source={{ uri: 'https://byu.az1.qualtrics.com/jfe/form/SV_41Pv4H7zAoepl4y' }} />
        </TopBar>
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