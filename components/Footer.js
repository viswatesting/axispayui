import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterUI from "../UI/FooterUI";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
    faUserPlus,
  faUsers,
  faRupeeSign,
  faQrcode
} from "@fortawesome/free-solid-svg-icons";
var list = [
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faUserPlus} size={18} />,
    text: "Add Account",
  },
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faUsers} size={18} />,
    text: "Manage Benificary",
  },
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faRupeeSign} size={18} />,
    text: "View Transaction",
  },
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faQrcode} size={18} />,
    text: "Scan & Pay",
  },
];
export default function Reacharge() {
  return (
  
    <FooterUI  style={styles.container} list={list}/>

  
  );
}

const styles = StyleSheet.create({
    container:{
        position:'relative',
        top:'100%',
        fontSize:'10px',
       
    },
    
});
