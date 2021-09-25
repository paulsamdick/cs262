
import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {

    /* Hardcode a "database"/list of movies. */
    const [reviews, setReviews] = useState([
        { title: "Fellowship of the Ring", rating: 8.8, key: '1',
            description: "Some hobbits begin a quest."},
        { title: "Two Towers", rating: 8.7, key: '2',
            description: 'Some dark lords try to take over the world.'},
        { title: "Return of the King", rating: 8.9, key: '3',
            description: 'The dark lords are defeated, to much rejoicing.'},
    ]);

    return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Get rid of that ugly button and, instead, display our list of movies. */}
            <FlatList data={reviews} renderItem={({ item })=> (
                <TouchableOpacity onPress={() => navigation.navigate('Details', item)}>
                    <Text>{ item.title }</Text>
                </TouchableOpacity>
            )} />
        </View>
    );
}

function DetailsScreen({ route, navigation }) {

    return (
        <View style={{ flex: 1, padding: 20}}>
            {/* Display the fields of the received movie object. */}
            <Text>{ route.params.title }</Text>
            <Text>{ route.params.rating }</Text>
            <Text>{ route.params.description }</Text>
        </View>
    );
}

/* Leave the App specification as it was. */

class OtherScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>
          itemId: {JSON.stringify(navigation.getParam('itemId', 'NO-ID'))}
        </Text>
        <Text>
          otherParam:{' '}
          {JSON.stringify(navigation.getParam('otherParam', 'default value'))}
        </Text>
        <Button
          title="Go to Details... again"
          onPress={() =>
            navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })
          }
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);