//about.js contains code for the about screen function of the monopoly players app
import React, { useState } from 'react';
import {  View, Text} from 'react-native';
import { globalStyles } from "/home/paul/monopolyProject/styles/global.js";

export default function AboutScreen ({navigation}) {
    
    return (
        <View style={globalStyles.container}>
              <Text> This application accesses information on monopoly players. </Text>
          </View>
      );
}