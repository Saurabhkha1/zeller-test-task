import React from 'react';
import {ActivityIndicator as RNActivityIndicator, View} from 'react-native';

import {styles} from './style';

import {COLOR_SECONDARY} from '../../utils/colors';

interface ActivityIndicatorProps {
  size?: 'small' | 'large';
  color?: string;
  isVisible: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({
  size = 'large',
  color = COLOR_SECONDARY,
  isVisible = false,
}) => {
  return isVisible ? (
    <View style={styles.container}>
      <RNActivityIndicator size={size} color={color} />
    </View>
  ) : null;
};

export default ActivityIndicator;
