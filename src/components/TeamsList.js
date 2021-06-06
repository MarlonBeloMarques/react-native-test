import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

const TeamsList = ({ size, list }) => {
  return <View>
    {list.map((item, index) => {
      return <Text key={index}>{item.name}</Text>;
    })}
    <ActivityIndicator animating size={size} />
  </View>;
}

export default TeamsList;