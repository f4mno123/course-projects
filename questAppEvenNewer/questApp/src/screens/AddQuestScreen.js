import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
const AddQuestScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.formText}>What's the quest?</Text>
        <TextInput style={styles.formInput} placeholder="Type the quest here!"></TextInput>
        <Button title="Add the quest" />
      </SafeAreaView>
    </View>
  )
};

//TODO:
//ADD a route which will add quests to db, and show quests from today on the questScreen 

const styles = StyleSheet.create({
    container: {
      flex:1,
    },
    formText: {
      marginLeft: 40,
      fontSize:40,
    },
    formInput: {
      fontSize: 20,
      marginTop: 20,
      textAlign: 'center',
      height: 40
    }
    
});

export default AddQuestScreen;
