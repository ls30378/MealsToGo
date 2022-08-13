import React from "react";
import { StatusBar } from "react-native";
import { Searchbar, Text } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import RestaurnatInfo from "../components/restaurant-info.component";
import styled from "styled-components/native";
import { sizes } from "../../../theme/sizes";

const SafeArea = styled(SafeAreaView)`flex:1;
${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};`
const SearchBarView = styled.View`
padding:${(props) => props.theme.sizes[1]};
background-color:${props => props.theme.colors.bg.primary}
`
const ListView = styled.View`
flex:1;
padding:${({ theme }) => sizes[1]};
`
function RestaurantScreens() {

    return (
        <SafeArea>
            <SearchBarView>
                <Searchbar placeholder="What are you looking for?" />
            </SearchBarView>
            <ListView >
                <RestaurnatInfo />
            </ListView>
        </SafeArea>

    );
}

export default RestaurantScreens;
