import React from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>{'Concursar'}</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
