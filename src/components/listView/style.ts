import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_PRIMARY, COLOR_SECONDARY} from '../../utils/colors';

export const styles = StyleSheet.create({
  userList: {
    marginVertical: 15,
    flexDirection: 'row',
  },
  profile: {
    backgroundColor: COLOR_PRIMARY,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  profileText: {
    color: COLOR_SECONDARY,
    fontSize: 15,
    textAlign: 'center',
  },
  listName: {
    paddingLeft: 12,
  },
  name: {
    color: COLOR_BLACK,
    fontSize: 16,
  },
  role: {
    color: COLOR_BLACK,
    textTransform: 'capitalize',
  },
});
