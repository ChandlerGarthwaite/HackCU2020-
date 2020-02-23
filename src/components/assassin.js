import * as React from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, route }) {



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'seagreen'}}>
    <View style ={styles.buttoncontainer}>
          <Button
            title="Press Me"
            onPress={() => navigation.navigate('CreatePost')}
            color = "black"
            backgroundColor = "black"
          />
    </View>
    <View style ={styles.buttoncontainer}>
          <Button
            title="Press Me"
            color = "black"
            onPress={() => navigation.navigate('CreatePost')}
          />
    </View>
    <View style ={styles.buttoncontainer}>
          <Button
            title="This looks great!"
            onPress={() => navigation.navigate('CreatePost')}
            color = "black"
          />
    </View>
    <View style ={styles.buttoncontainer}>
          <Button
            title="OK!"
            color = "black"
            onPress={() => navigation.navigate('CreatePost')}
          />
    </View>
    <View style={styles.buttoncontainer}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
        color = "black"
      />
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
	buttoncontainer: {
		margin: 20,
	}
});

function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'black' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
      
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

