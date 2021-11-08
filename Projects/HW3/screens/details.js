//details.js contains code for the details screen of the monopoly players App.
import React from 'react';
import { View, Text} from 'react-native';
import { globalStyles } from "/Users/Paul/Documents/homework3/styles/global.js";
import { titleStyle } from "/Users/Paul/Documents/homework3/styles/global.js";

export default function DetailsScreen({route, navigation}) {
    
return (
    <View style={globalStyles.container}>
      <Text style = {titleStyle.container}> gameid: {route.params.gameid} {"\n"} score: {route.params.score} </Text>
    </View>
  );
};
