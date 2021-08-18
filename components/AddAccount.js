import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CardUI from '../UI/CardUI'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddAccount() {
    let icon=<FontAwesomeIcon style={styles.icon} size={45}  icon={faUserPlus} />
    return (
        <View>
             
           <CardUI  icon={icon} style={styles.container} text="Add Account"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    margin:'15px',
    height:200,
    justifyContent:'center',
    alignItems:'center',
    shadowColor:'black',
    shadowOffset:{
        width:0,
        height:2
    },
    shadowRadius:6,
    shadowOpacity:0.26,
    elevation:5,
    borderRadius:10
    },
    icon:{
        color:"rgb(147, 19, 75)"
    }
})
