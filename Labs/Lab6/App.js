import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  async getBooks() {https://www.googleapis.com/books/v1/volumes?q=jane%20austen
    try {
      const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=jane%20austen');
      const json = await response.json();
      this.setState({ data: json.items });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{item.volumeInfo.title}, {item.volumeInfo.publishedDate}</Text>
            )}
          />
        )}
      </View>
    );
  }
};