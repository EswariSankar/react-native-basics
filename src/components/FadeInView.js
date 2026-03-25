// FadeInView.js
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const FadeInView = ({ children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // start invisible

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,        // fade to fully visible
      duration: 2000,     // 0.8 seconds
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

export default FadeInView;