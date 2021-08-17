import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CircleNotification from './CircleNotification'
export default function CardUI(props) {
    let notifi;
    if(props.notifyNum){
        notifi=<CircleNotification
        num={props.notifyNum}
        />
    }
    
    return (
        <View style={[styles.container,props.style]}>
            {props.icon}
           <Text style={{color:'rgb(147, 19, 75)'}}>
               {props.text}
            {notifi}
            </Text>
           <Text>{props.text2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    }
})
