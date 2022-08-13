import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import RestaurantScreens from "./src/features/restaurants/screens/restaurants.screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/theme";
export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreens />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}

