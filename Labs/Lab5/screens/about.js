import React, { useState } from 'react';
import {  View, Text} from 'react-native';
import { globalStyles } from "/home/paul/LAB5/styles/global.js";

export default function AboutScreen ({navigation}) {
    
    return (
        <View style={globalStyles.container}>
              <Text> This application lists movies and movie reviews. </Text>
          </View>
      );
}