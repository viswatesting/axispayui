import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardUI from '../UI/CardUI'
export default function Requests() {
    return (
        <View>
        <CardUI style={styles.container} notifyNum='0' text="Pending Requests is " text2=" No Pending Requests To Approve"/>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:'10px',
        padding:'20px'
    }
})
