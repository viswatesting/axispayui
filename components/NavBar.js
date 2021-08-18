import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {  faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <FontAwesomeIcon size={25} style={styles.text} icon={faBars} />
        <Text style={styles.text}>
          <Text style={{ fontStyle: "italic",fontSize:20 }}>BHIM</Text> AXIS PAY
        </Text>
      </View>
      <FontAwesomeIcon style={styles.text} size={25} icon={faBell} />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(147, 19, 75)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
    color: "white",
    alignItems:'center'
  },
  first: {
    width: "150px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center'
  },
  text: {
    color: "white",
    fontWeight: "900",
    
  },
});
