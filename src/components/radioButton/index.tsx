import React from 'react';
import {View, TouchableOpacity, ViewStyle, Text, TextStyle} from 'react-native';

import {styles} from './style';

interface RadioButtonProps {
  label: string;
  onChange: Function;
  customButtonStyle?: ViewStyle;
  activeButton: string;
  labelStyle?: TextStyle;
  radioSize?: number;
  fillColor?: string;
  borderColor?: string;
}

const RadioButton: React.FC<RadioButtonProps> = props => {
  const {
    onChange,
    label,
    customButtonStyle,
    radioSize,
    activeButton,
    fillColor,
    borderColor,
  } = props || {};

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChange(label)}
      style={[
        activeButton === label ? styles.activeButton : styles.inActiveButton,
        customButtonStyle,
      ]}>
      <View
        style={[
          styles.radio,
          borderColor && activeButton === label
            ? {borderColor: borderColor}
            : null,
          radioSize
            ? {
                width: radioSize,
                height: radioSize,
                borderRadius: radioSize,
              }
            : null,
        ]}>
        {activeButton === label ? (
          <View
            style={[
              styles.fill,
              fillColor ? {backgroundColor: fillColor} : null,
              radioSize
                ? {
                    width: radioSize / 1.6,
                    height: radioSize / 1.6,
                    borderRadius: radioSize,
                  }
                : null,
            ]}
          />
        ) : null}
      </View>
      <View style={styles.labelView}>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
