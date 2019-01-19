import React from 'react';
import {View, TextInput, Button} from 'react-native';

class AddTodo extends React.Component{
    constructor(){
        super();

        this.state={
            text: ''
        }
    }
    
    onTextInput(text){
        this.setState({
            text: text,
        })
    }

    addTodo(){
        this.props.add(this.state.text)
        this.setState({
            text: ''
        })
    }

    render(){
        return(
            <View>
                <TextInput 
                    value={this.state.text}
                    onChangeText={text => this.onTextInput(text)}
                />
                <Button 
                    onPress={
                        () => this.addTodo()
                    }
                    title='add'/>
            </View>
        );
    }
}

export default AddTodo;