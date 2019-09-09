import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import styles from './css';
class ChatsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: '',
      messages: [
        {id:1, sent: true,  msg: 'hi',   image:'https://lh3.googleusercontent.com/a-/AAuE7mBf1dI9mFkRzbUEqrOqSDzupBXy3iBWmzUUoPjZtQ=s96-c'},
        {id:2, sent: true,  msg: 'how r u',   image:'https://lh3.googleusercontent.com/a-/AAuE7mBf1dI9mFkRzbUEqrOqSDzupBXy3iBWmzUUoPjZtQ=s96-c'},
        {id:3, sent: false, msg: 'Fine you?', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:4, sent: true,  msg: 'I am going home.',   image:'https://lh3.googleusercontent.com/a-/AAuE7mBf1dI9mFkRzbUEqrOqSDzupBXy3iBWmzUUoPjZtQ=s96-c'},
        {id:5, sent: false, msg: 'Nice to see you', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:6, sent: true,  msg: 'Can you see my dog. I think I lose them.',   image:'https://lh3.googleusercontent.com/a-/AAuE7mBf1dI9mFkRzbUEqrOqSDzupBXy3iBWmzUUoPjZtQ=s96-c'},
        {id:7, sent: false, msg: 'No I do not see anything.', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
        {id:8, sent: false, msg: 'Thank you', image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'},
      ]
    };
    this.send = this.send.bind(this);
    this.reply = this.reply.bind(this);
    this.renderItem   = this._renderItem.bind(this);
  }

  reply() {
    var messages = this.state.messages;
    messages.push({
      id:Math.floor((Math.random() * 99999999999999999) + 1),
      sent: false,
      msg: this.state.msg,
      image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'
    });
    this.setState({msg:'', messages:messages});
  }

  send() {
    if (this.state.msg.length > 0) {
      var messages = this.state.messages;
      messages.push({
        id:Math.floor((Math.random() * 99999999999999999) + 1),
        sent: true,
        msg: this.state.msg,
        image:'https://lh3.googleusercontent.com/a-/AAuE7mBf1dI9mFkRzbUEqrOqSDzupBXy3iBWmzUUoPjZtQ=s96-c'
      });
      this.setState({messages:messages});
      setTimeout(() => {
        this.reply();
      }, 2000);
    }
  }

  _renderItem = ({item}) => {
    if (item.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image source={{ uri: item.image}} style={styles.userPic} />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>{item.msg}</Text>
          </View>
        </View>
      );
    } else{
      return (
        <View style={styles.rightMsg} >
          <View style={styles.rightBlock} >
            <Text style={styles.rightTxt}>{item.msg}</Text>
          </View>
          <Image source={{uri: item.image}} style={styles.userPic} />
        </View>
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
          <KeyboardAvoidingView behavior="padding" style={styles.keyboard}>
            <FlatList 
              style={styles.list}
              extraData={this.state}
              data={this.state.messages}
              keyExtractor = {(item) => {
                return item.id.toString();
              }}
              renderItem={this.renderItem}/>
            <View style={styles.input}>
              <TextInput
                style={{flex: 1 }}
                value={this.state.msg}
                placeholderTextColor = "#696969"
                onChangeText={msg => this.setState({ msg })}
                blurOnSubmit={false}
                onSubmitEditing={() => this.send()}
                placeholder="Type a message"
                returnKeyType="send"/>
            </View>
          </KeyboardAvoidingView>
      </View>
    );
  }
}


ChatsScreen.navigationOptions = {
  title: 'Chats',
};



export default ChatsScreen;
