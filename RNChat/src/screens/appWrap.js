import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import AuthService from '../services/auth-service';
import ChatService from '../services/chat-service';

const AppWrap = ({ navigation }) => {
  useEffect(() => {
    initUser();
  }, []);

  const initUser = async () => {
    const rootStackScreen = await AuthService.init();
    if (rootStackScreen === 'Dialogs') {
      ChatService.setUpListeners();
    }
    navigation.navigate(rootStackScreen);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imageSize} source={require('../../assets/image/logo_with_text.png')} />
    </View>
  );
};

export default AppWrap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSize: {
    width: 200,
    height: 150,
  },
});
