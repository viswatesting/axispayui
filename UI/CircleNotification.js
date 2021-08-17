import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CircleNotification(props) {
    return (
        <View style={[styles.circle,props.style]}>
            {props.num}
        </View>
    )
}

const styles = StyleSheet.create({

    circle:{
        backgroundColor:'rgb(147, 19, 75)',
        color:'white',
        padding:'5px',
        paddingLeft:'10px',
        paddingRight:'10px',
        borderRadius:'50%'
    }
})
