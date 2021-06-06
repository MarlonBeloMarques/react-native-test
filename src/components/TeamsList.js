import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const TeamsList = ({ size }) => {
  return <View>
    <ActivityIndicator animating size={size} />
  </View>;
}

export default TeamsList;