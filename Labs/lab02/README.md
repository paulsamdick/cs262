CS262-A LAB-2 

Paul Dick, 9.11.21

File contains the code for the imageshare app (The App.js) as well as the answers to the lab questions (scroll to the bottom).
This work is based on [Project Management — Lab 2](https://cs.calvin.edu/courses/cs/262/kvlinden/02management/lab.html)



import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
export default function App() {
     const [selectedImage, setSelectedImage] = React.useState(null);

     let openImagePickerAsync = async() => {
	 let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

	 if (permissionResult.granted === false){
		 alert("Permission to access camera roll is required!");
		 return;
	 }
	     let openShareDialogAsync = async() => {
		     if (!(await Sharing.isavialableAsync())) {
			     alert("Uh oh, sharing isn't available on your platforn");
			     return;
		     }
		     await Sharing.shareAsync(selectedImage.localUri);
	     };

	 let pickerResult = await ImagePicker.launchImageLibraryAsync();
	 if (pickerResult.cancelled === true){
		 return;
	 }
	     setSelectedImage({localUri: pickerResult.uri});
     };
	if (selectedImage !== null){
		return(
			<View style= {styles.container}>
			<Image
			  source = {{ uri: selectedImage.localUri }}
			style = {styles.thumbnail}
			/>
			<TouchableOpacity onPress = {openShareDialogAsync} style = {styles.button}>
			<Text style = {styles.buttonText}>Share this photo</Text>
		</TouchableOpacity>
		</View>
 }

  return (
    <View style={styles.container}>
      <Image source = {{ uri: "https://www.wallpapers13.com/wallpaper-wiki-cool-nature-backgrounds-for-desktop-2048x1174-pic-wpd0010113/"}} 
                 style = {styles.logo}/>    

      <Text style = {styles.instructions}>
	  To share a photo from your phone with a friend just press the button below!
      </Text>
    
      <TouchableOpacity
		  onPress={() =>{openImagePickerAsync}}
	  style={styles.button}>
	  <Text style = {styles.buttonText}>Pick a photo</Text>
	  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
	  width: 305,
	  height: 159,
	  marginBottom: 10,
  },
  instructions:{
	color: '#888',
	fontSize: 18,
	marginHorizantal: 15,
	},
  button: {
	  backgroundColor: "blue",
	  padding: 20,
	  borderRadius: 5,
  },
  buttonText: {
	fontSize: 20,
	color: '#fff',
	},
  thumbnail: {
	  width: 300,
	  height: 300,
	  resizeMode: "contain"
  }
});




Answers to questions:
What technology from last unit's guide is used to specify the StyleSheet?
1. The Closure appears to be used in the creation of the StyleSheet.

2. Curly Braces are used in the JSX code to let it know that the contents are JavaSCript code.

3.The purpose of the asynchronous asyc declaration is to fill at a different time the neccessary decorate specifications and allow for "promise based" behavior.

4. What ReactNative tech is being used to implement selectedImage and setSelectedImage?
The idea of Hooks is used to implement selectedImage and setSelectedImage.

5. An example of an anonymous function would be onpress = {() => {openImagePickerAssync}}
