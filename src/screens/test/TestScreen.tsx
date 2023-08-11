import * as React from 'react';
import { View } from 'react-native';
import { Text, makeStyles } from '@rneui/themed';

function TestScreen() {
  const styles = useStyles();
  return (
    <View style={styles.root}>
      <Text>Hello Native</Text>
    </View>
  );
}

export default TestScreen;

const useStyles = makeStyles({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
