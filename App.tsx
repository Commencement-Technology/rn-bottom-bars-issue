import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TabView, {SceneMap} from 'react-native-bottom-tabs';

const ScreenA = () => (
  <View>
    <Text>Screen A</Text>
  </View>
);

const ScreenB = () => (
  <View>
    <Text>Screen B</Text>
  </View>
);

const ScreenC = () => (
  <View>
    <Text>Screen C</Text>
  </View>
);

export default function App(): React.JSX.Element {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: 'article',
      title: 'Article',
      focusedIcon: require('./icon.png'),
      badge: '!',
    },
    {
      key: 'albums',
      title: 'Albums',
      focusedIcon: require('./icon.png'),
      badge: '5',
    },
    {
      key: 'contacts',
      title: 'Contacts',
      focusedIcon: require('./icon.png'),
    },
  ]);

  const renderScene = SceneMap({
    article: ScreenA,
    albums: ScreenB,
    contacts: ScreenC,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
