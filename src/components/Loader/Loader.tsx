import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

function Loader() {
  const styles = StyleSheet.create({
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default Loader;
