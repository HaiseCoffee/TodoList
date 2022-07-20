import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import Task from './components/Task'
import Toast from 'react-native-root-toast';


export default function App() {
  const [task, setTask] = useState() //Create a state in a component. task = name of the state, setTask = set the state
  const [taskItems, setTaskItems] = useState([])
  let taskCounting

  const handleAddTask = () => {
    console.log(taskCounting)
    if(task == null || taskCounting == 5) {
      let toast = Toast.show('Task name must not be empty!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.CENTER,
      });

      setTimeout(function hideToast() {
        Toast.hide(toast);
      }, 4000);
    } else {
      taskCounting++
      setTaskItems([...taskItems, task]) //takes the previous data, and the new one
      setTask(null)
      Keyboard.dismiss()
    }
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          {/* All tasks */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completeTask(index)}>
                  <Task style={{textDecorationLine: 'line-through'}} text={item} />
                </TouchableOpacity>
              )
            })  
          }
        </View>
      </View>

    {/* Create a task */}
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a task'} placeholderTextColor={'#000'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#BB86FC',
    width: 250,
    borderRadius: 60,
    borderColor: '#696969',
    borderWidth:1,
    color:'#000',
    fontWeight: 'bold'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#BB86FC',
    borderRadius: 60,
    borderColor: '#696969',
    borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: '#000',
    fontSize: 30
  },
});
