import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Keyboard} from 'react-native';
import Task from './components/Task';

export default function App() {
	const [task, setTask] = useState();
	const[taskItems, setTaskItems] = useState([]);
	
	const handleAddTask = () =>{
		Keyboard.dismiss();
		setTaskItems([...taskItems, task])
		setTask(null);
	}
	const completeTask = (index) =>{
		let itemsCopy = [...taskItems];
		itemsCopy.splice(index, 1);
		setTaskItems(itemsCopy);
	}
  return (
    <View style={styles.container}>
		{/*Today's Tasks*/}
		<View style = {styles.tasksWrapper}>
		<Text style = {styles.sectionTitle}> Today's tasks </Text>
		<View style = {styles.items}>
		{/* This is where tasks will go*/}
		{
			taskItems.map((item, index) => {
				return (
				<TouchableOpacity key = {index} onPress = {() => completeTask(index)}>
					<Task text = {item}/>
				</TouchableOpacity>
				
				)
			})
		}
		
		</View>
	</View>

		{/*Write a task section*/}
		<KeyboardAvoidingView
			behavior = {Platform.OS === "ios" ? "padding" : "height"}
			style = {styles.writeTaskWrapper}
			>
			<TextInput style = {styles.input} placeholder = {'Write your task!'} value = {task} onChangeText = {text => setTask(text)}/>

			<TouchableOpacity onPress = {() => handleAddTask()}>
				<View style = {styles.addWrapper}>
					<Text style = {styles.addText}> + </Text>
				</View>
			</TouchableOpacity>

		</KeyboardAvoidingView>
	</View>
  );
}


const styles = StyleSheet.create({
	container: {
    	flex: 1,
    	backgroundColor: '#E8EAED',
    },

	tasksWrapper: {
		paddingTop: 100,
		paddingHorizantal: 20,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 'bold'
	},
	items: {
		marginTop: 30,
		justifyContents: 'center',
	},
	writeTaskWrapper: {
		position: 'absolute',
		top: 30,
		width: '100%',
		flexDirection: 'row',
		justifyContents: 'space-around',
		alignItems: 'center'
	},
	input: {
		paddingVertical: 15,
		paddingHorizantal: 15, 
		width: 250,
		backgroundColor: '#FFF',
		borderRadius: 70,
		borderColor: '#000FF',
		borderWidth: 1,
	},
	addWrapper: {
		width: 50,
		height: 50,
		backgroundColor: '#FFF',
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#000FF',
		borderWidth: 1,
		borderRadius: 180
	},
	addText: {},
});
