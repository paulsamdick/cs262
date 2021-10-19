//details.js contains code for the details screen of the monopoly players App.
import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from "/home/paul/monopolyProject/styles/global.js";
import { titleStyle } from "/home/paul/monopolyProject/styles/global.js";

export default function DetailsScreen({route, navigation}) {
    
return (
    <View style={globalStyles.container}>
      <Text style = {titleStyle.container}> { route.params.email } {"\n"} id: {route.params.id} {"\n"} AKA: {route.params.name} </Text>
    </View>
  );
};
