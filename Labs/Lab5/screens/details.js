
import React, { useState } from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from "/home/paul/LAB5/styles/global.js";

export default function DetailsScreen({ route, navigation }) {

    return (
      <View style={globalStyles.container}>
            {/* Display the fields of the received movie object. */}
            <Text>{ route.params.title }</Text>
            <Text>{ route.params.rating }</Text>
            <Text>{ route.params.description }</Text>
        </View>
    );
}