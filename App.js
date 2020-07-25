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
      { id: Math.random().toString(), value: goalItem },
    ]);
  };

  const removeGoalHandler = (goalid) => {
    setSavedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalid);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={savedGoals}
        renderItem={(itemData) => (
          <GoalItem
            onDelete={removeGoalHandler}
            id={itemData.item.id}
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
