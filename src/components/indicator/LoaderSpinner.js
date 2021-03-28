import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

const LoaderSpinner = () => (
  <ActivityIndicator animating={true} color={Colors.red800} />
);

export default LoaderSpinner;