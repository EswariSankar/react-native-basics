import React from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native';

const Loader = ({ visible = false, size = 'large', color = '#067bdb' }) => {
  if (!visible) return null; // don't render if not visible

  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <ActivityIndicator size={size} color={color} />
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)', // semi-transparent overlay
    justifyContent: 'center',
    alignItems: 'center',
  },
});