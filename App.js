import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import Toast from 'react-native-toast-message';
import 'react-native-gesture-handler';
import AppNav from './src/components/Navigation/AppNav';
import {NavigationContainer} from '@react-navigation/native';
import CustomerOption from './src/components/CustomerOption/index.js';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#c79248'} />
      <NavigationContainer>
        <AppNav />
        {/* <CustomerOption /> */}
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

export default App;
