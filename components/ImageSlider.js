import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native";
export default function ImageSlider() {
  const [image, setImage] = useState({
    active:0
  });
  
  const images= [
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree", // Network image
    
  ]
  
  const active=image.active
  function change(nativeEvent){
    console.log(nativeEvent)
    const slide=Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width)
    if(slide!==image.active){
        setImage({active:slide})
    }
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
        onScroll={({nativeEvent})=>change(nativeEvent)}
          showsHorizontalScrollIndicator="false"
          pagingEnabled
          style={styles.wrap}
          horizontal
        >
          {images.map((ele) => (
            <Image
              key={ele}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: ele }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
            {
               images.map((ele,index) =>  <Text  key={ele} style={active===index?styles.dotActive:styles.dot}>●</Text>)
            }
         
        </View>
      </View>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.20,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotActive:{
      margin:3,
      color:'black'
  }
});
