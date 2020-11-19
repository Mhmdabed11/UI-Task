import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

// get windows width
const windowWidth = Dimensions.get('window').width;

// CONSTANTS
const PRIMARY_COLOR = '#0F1C22';
const GRAY_SHADE = '#F4F5FB';
const BLACK_SHADE = '#000000';
const WHITE_SHADE = 'white';
const CONTROL_BTN_SIZE = 40;
const HORIZONTAL_PADDING = 20;
const VERTICAL_PADDING = 30;

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.nameContainer}>
          <View style={styles.nameWrapper}>
            <View style={styles.controlBtn} />
            <View style={styles.name}>
              <Text style={styles.textStyle} numberOfLines={1}>
                Hello My Name is Mohammad abed and I live in Lebanon.
              </Text>
            </View>
            <View style={styles.controlBtn} />
          </View>
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.textStyle}>Balance</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    padding: 10,
  },
  wrapper: {
    backgroundColor: WHITE_SHADE,
    maxWidth: windowWidth * 0.75,
    borderRadius: 20,
    overflow: 'hidden',
  },
  nameContainer: {
    backgroundColor: GRAY_SHADE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 27,
    backgroundColor: WHITE_SHADE,
    paddingVertical: VERTICAL_PADDING,
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  controlBtn: {
    height: CONTROL_BTN_SIZE,
    flexBasis: CONTROL_BTN_SIZE,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 8,
    elevation: 10,
    shadowOffset: {width: 1, height: 1},
    shadowColor: BLACK_SHADE,
    shadowOpacity: 0.5,
  },
  name: {
    flexShrink: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
    paddingVertical: VERTICAL_PADDING,
    backgroundColor: GRAY_SHADE,
    borderTopRightRadius: 27,
  },
  textStyle: {
    fontSize: 20,
    color: PRIMARY_COLOR,
    fontWeight: '600',
  },
});
