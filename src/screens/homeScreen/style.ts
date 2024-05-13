import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_LIGHT_GRAY} from '../../utils/colors';

export const styles = StyleSheet.create({
  userTypeView: {
    paddingVertical: 10,
  },
  userTypeText: {
    fontWeight: '700',
    fontSize: 20,
    color: COLOR_BLACK,
  },
  listView: {
    marginTop: 10,
  },
  listUserTest: {
    fontSize: 20,
    fontWeight: '700',
    color: COLOR_BLACK,
    textTransform: 'capitalize',
  },
  line: {
    height: 1.5,
    backgroundColor: COLOR_LIGHT_GRAY,
    marginVertical: 20,
  },
});
