
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Tabs} from "expo-router";

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