import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { styles } from './style';

import { STRING } from '../../utils/constants';
import { useQuery } from '../../common/generated/graphql';
import {
  ActivityIndicator,
  Container,
  ListView,
  RadioButton,
  SearchInput,
} from '../../components';

interface HomeScreenProps {
  navigation: NavigationProp<object>;
}
interface ItemsProp {
  role: string;
  name: string;
  id: string;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { data, loading, refetch } = useQuery();
  const [userList, setUserList] = useState<ItemsProp[] | undefined | null>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [activeRadioBtn, setActiveRadioBtn] = useState<string>(STRING.ADMIN);

  const { items: users } = data?.listZellerCustomers || {};

  const handleSearchTextChange = useCallback(
    (text: string, userType: string) => {
      const filterlist: ItemsProp[] = users?.filter((val: any) =>
        text.length > 0 ? val.name?.includes(text) : val.role === userType,
      );

      setUserList(filterlist);
    },
    [users],
  );

  // filter list after half second once user stop typing
  useEffect(() => {
    const delay = setTimeout(() => {
      if (activeRadioBtn || searchText) {
        handleSearchTextChange(searchText, activeRadioBtn);
      }
    }, 500);
    return () => clearTimeout(delay);
  }, [activeRadioBtn, handleSearchTextChange, users, searchText]);

  return (
    <Container>
      <ActivityIndicator isVisible={loading} />

      <View style={styles.userTypeView}>
        <Text style={styles.userTypeText}>{STRING.USER_TYPE}</Text>
      </View>

      <RadioButton
        label={STRING.ADMIN}
        onChange={(value: React.SetStateAction<string>) =>
          setActiveRadioBtn(value)
        }
        activeButton={activeRadioBtn}
        radioSize={20}
      />
      <RadioButton
        onChange={(value: React.SetStateAction<string>) =>
          setActiveRadioBtn(value)
        }
        radioSize={20}
        activeButton={activeRadioBtn}
        label={STRING.MANAGER}
      />

      <View style={styles.line} />
      <SearchInput
        placeholder={STRING.SEARCH_TEXT}
        onChangeText={val => setSearchText(val)}
      />
      <View style={styles.listView}>
        {activeRadioBtn && (
          <Text style={styles.listUserTest}>
            {activeRadioBtn} {STRING.USER}
          </Text>
        )}
        <FlatList
          bounces={false}
          showsVerticalScrollIndicator={false}
          data={userList}
          renderItem={({ item }) => (
            <ListView
              item={item}
              onPress={() => navigation.navigate('Details' as never)}
            />
          )}
          keyExtractor={item => item?.id}
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={() => refetch()} />
          }
        />
      </View>
    </Container>
  );
};

export default HomeScreen;
