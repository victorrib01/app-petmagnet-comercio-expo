import React from 'react';
import * as firebase from 'firebase';
import ApiKeys from './src/services/apikeys'
import TabNavigator from './src/components/navigator/TabNavigator'

export default function App() {
  if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig);}
  return (
    <TabNavigator/>
  );
}
