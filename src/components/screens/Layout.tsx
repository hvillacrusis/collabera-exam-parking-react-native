import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

const Layout: React.FC<{children: JSX.Element}> = ({children}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
  },
});

export default Layout;
