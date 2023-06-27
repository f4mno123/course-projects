import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const QuestScreen = ({ navigation }) => {
  return (
    <>
      <Text style={styles.headerText}>Today's Quests!</Text>
      <Button
        title="Add a quest"
        onPress={() => navigation.navigate('addQuest')}
      />
    </>
  );
};



const styles = StyleSheet.create({
  headerText: {
    marginLeft: 60,
    fontSize: 40
  }
});

export default QuestScreen;
