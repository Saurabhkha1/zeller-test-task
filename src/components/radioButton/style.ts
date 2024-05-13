import {StyleSheet} from 'react-native';
import {COLOR_BLACK, COLOR_PRIMARY, COLOR_SECONDARY} from '../../utils/colors';

export const styles = StyleSheet.create({
  inActiveButton: {
    paddingVertical: 8,
    flexDirection: 'row',
    paddingLeft: 8,
    borderRadius: 5,
  },
  activeButton: {
    paddingVertical: 8,
    flexDirection: 'row',
    paddingLeft: 8,
    backgroundColor: COLOR_PRIMARY,
    borderRadius: 5,
  },
  radio: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR_SECONDARY,
  },
  fill: {
    backgroundColor: COLOR_SECONDARY,
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  labelView: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  label: {
    textTransform: 'capitalize',
    color: COLOR_BLACK,
  },
});
