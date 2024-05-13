import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';

interface ListViewProps {
  item: {role: any; name: any};
  onPress: () => void;
}

const ListView: React.FC<ListViewProps> = props => {
  const {
    item: {role, name},
    onPress,
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.userList}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>{name?.slice(0, 1)}</Text>
        </View>
        <View style={styles.listName}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.role}>{role}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListView;
