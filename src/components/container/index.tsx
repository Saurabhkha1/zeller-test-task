import React, {FC} from 'react';
import {ScrollView, SafeAreaView} from 'react-native';

import {styles} from './styles';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({children}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Container;
