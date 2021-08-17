import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FooterUI from "../UI/FooterUI";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEllipsisH,
  faMobile,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
var list = [
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faMobile} size={25} />,
    text: "Mobile Prepaid",
  },
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faSatelliteDish} size={25} />,
    text: "DTH Prepaid",
  },
  {
    icon: <FontAwesomeIcon style={{color:'rgb(147, 19, 75)'}} icon={faEllipsisH} size={25} />,
    text: " Coming Soon",
  },
];
export default function Reacharge() {
  return (
    <View>
    <FooterUI 
            heading="Recharge"
            list={list}
            style={styles.container}
            />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: "10px",
    height:'120%',
  },
});
