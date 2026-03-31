
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Tabs} from "expo-router";
import {ImageBackground} from "expo-image";
import {Image} from 'expo-image';
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";

const _layout = () => {
  return (

    //hiding single rout that u wnat
   <Tabs>

       <Tabs.Screen
       name="index"
       options={{
           title: 'Home',
           headerShown: false,

       }}
       />
       <Tabs.Screen
       name="profile"
       options={{
           title: 'Profile',
           headerShown: false,
       }}

       />

       <Tabs.Screen
       name="saved"
       options={{
           title: 'Saved',
           headerShown: false,
       }}/>
       <Tabs.Screen
           name="search"
           options={{
               title: 'Search',
               headerShown: false,
           }}/>
   </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});