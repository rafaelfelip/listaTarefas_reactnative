import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TaskList from './src/component/TaskList';

export default function App() {
  const [task, setTask] = useState([
    { key: 1, task: 'Comprar pão' },
    { key: 2, task: 'Lavar roupa' },
    { key: 3, task: 'Comprar whey' },
    { key: 4, task: 'Comer muitas batatas' },
    { key: 5, task: 'Assistir o Sujeito Programador' },
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#171d31" barStyle="light-content" />
      {/* no app.json fiz alteração ( androisStatusBar) */}
      <View style={styles.content}>
        <Text style={styles.title}>Minhas Tarefas</Text>
      </View>
      <FlatList
        marginHorizontal={10}
        showsHorizontalScrollIndicator={false}
        data={task}
        keyExtractor={(item) => String(item.key)}
        renderItem={({ item }) => <TaskList data={item} />}
      />
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="ios-add" size={35} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171d31',
  },
  title: {
    marginTop: 20,
    paddingBottom: 10,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    textShadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
