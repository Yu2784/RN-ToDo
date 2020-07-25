import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [savedGoals, setSavedGoals] = useState([]);

  const addGoalHandler = (goalItem) => {
    setSavedGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalItem },
    ]);
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={savedGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={() => console.log("Delete")}
            item={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
