import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [savedGoals, setSavedGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalItem) => {
    if (goalItem != "") {
      setSavedGoals((currentGoals) => [
        ...currentGoals,
        { id: Math.random().toString(), value: goalItem },
      ]);
      setIsAddMode(false);
    }
  };

  const removeGoalHandler = (goalid) => {
    setSavedGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id != goalid);
    });
  };

  const cancelAddGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancelGoal={cancelAddGoalHandler}
      />
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
