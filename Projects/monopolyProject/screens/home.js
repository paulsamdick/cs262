//home.js contains code for the HomeScreen function of the monopoly players app.
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import { globalStyles } from "/home/paul/monopolyProject/styles/global.js";
import { titleStyle } from "/home/paul/monopolyProject/styles/global.js";
import { buttonStyles } from "/home/paul/monopolyProject/styles/global.js";//\\wsl$\ubuntu\home\paul\monopolyProject\styles\global.js




export default function HomeScreen ({navigation}) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

    useEffect(() => {
      fetch('https://cs262-monopoly-service.herokuapp.com/players/')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }, []);


  useEffect(() => {
  }, []);

  return (
    <View style={globalStyles.container}>
      {isLoading ? <ActivityIndicator/> : (
   
     <FlatList
     data={data}
     keyExtractor={({ id }, index) => id.toString()}
     
     renderItem={({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
      <Text style = {titleStyle.container}> { item.email } </Text>
      </TouchableOpacity>
         
     )}
 />
      )}
      {console.log ("got here")}
      <TouchableOpacity onPress={() => navigation.navigate('About') } style={buttonStyles.button}>
				              <Text style={buttonStyles.buttonText}>About</Text>
	   </TouchableOpacity>
    </View>
  );
};

/*
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
            {/* Get rid of that ugly button and, instead, display our list of movies. */
            /*
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
*/