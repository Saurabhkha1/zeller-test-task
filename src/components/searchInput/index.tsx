import React, {FC} from 'react';
import {TextInput, View} from 'react-native';

import {styles} from './styles';

interface SearchInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({placeholder, onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default SearchInput;
