
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList} from 'react-native';
import { globalStyles } from "/home/paul/LAB5/styles/global.js";
import { titleStyle } from "/home/paul/LAB5/styles/global.js";
import { buttonStyles } from "/home/paul/LAB5/styles/global.js";

export default function HomeScreen ({navigation}) {
    const [reviews, setReviews] = useState ([
        { title: "Fellowship of the Ring", rating: 8.8, key: '1',
                description : "some hobbits begin a quest."},
        { title: "Two Towers", rating: 8.7, key: '2',
                description: 'Some dark lords try to take over the world.'},
        { title: "Return of the King", rating: 8.9, key: '3',
                description: 'The dark lords are defeated, to much rejoicing.'},
    
    ]);

    return (
      <View style={globalStyles.container}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            <FlatList data={reviews} renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text style = {titleStyle.container}> { item.title } </Text>
                </TouchableOpacity>
            )} />
            
           <TouchableOpacity onPress={() => navigation.navigate('About') } style={buttonStyles.button}>
				              <Text style={buttonStyles.buttonText}>About</Text>
			</TouchableOpacity>
        </View>
    );
}
