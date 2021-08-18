import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavBar from "./components/NavBar";
import ImageSlider from "./components/ImageSlider";
import Requests from "./components/Requests";
import AddAccount from "./components/AddAccount";
import Reacharge from "./components/Reacharge";
import Footer from "./components/Footer";
import Navigation from './components/Navigation'
export default function App() {
  return (
    <View>
      <NavBar />
      {/* <View>
        <ImageSlider />
      </View>
      <View style={styles.containe}>
        <View>
          <Requests />
        </View>
        <View>
          <AddAccount />
        </View>
        <View>
          <Reacharge />
        </View>
        <View>
          <Footer />
        </View>
      </View>  */}
       <Navigation/> 
    </View>
  );
}

const styles = StyleSheet.create({
  containe: {
    backgroundColor: "rgb(238, 238, 238)",
    height: "80%",
    justifyContent: "space-between",
  },
});
