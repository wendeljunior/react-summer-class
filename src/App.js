import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TodoList from './components/todo-list';
import AddTodo from './components/add-todo';

export default class App extends Component {
  constructor(){
    super();
    const todo1 = {
      text: 'tirar warning',
    };
    const todo2 = {
      text: 'arrumar o coiso',
    };

    this.state = {
      todos:[todo1, todo2],
    }
  }
addTodo(text){
  this.setState({
    todos:this.state.todos.concat([{text: text}]),
  })
}

  render() {
    return (
      <View style={styles.container}>
        <AddTodo add={text=> this.addTodo(text)}/>
        <TodoList todoList={this.state.todos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});