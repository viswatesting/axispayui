import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function FooterUI(props) {
  let heading;
  if(props.heading){
    heading=<Text style={styles.heading}>{props.heading} </Text>
  }
  return (
    <View style={[styles.container, props.style]}>
      {heading}
      <View style={styles.list}>
        {props.list.map((el) => (
          <>
            <View >
              <Text>{el.icon}</Text>
              <Text 
              style={props.list.length>3?styles.listItems:{}}>
                {el.text}
                </Text>
            </View>
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom:'5px',
  },
  heading:{
    marginLeft:'10px',
    color:'rgb(147, 19, 75)'
  },
  list: {
    marginTop:'5px',
    flexDirection: "row",
    alignItems: "center",
    textAlign:'center',
    justifyContent: "space-around",
  },
  listItems:{
    fontSize:11
  }
});
