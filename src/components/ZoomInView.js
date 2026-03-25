import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

const ZoomInView = ({ children, style }) => {
  const scaleAnim = useRef(new Animated.Value(0.5)).current; // start small

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,      // normal size
      friction: 8,     // smoothness
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        style,
        {
          transform: [{ scale: scaleAnim }]
        }
      ]}
    >
      {children}
    </Animated.View>
  );
};

export default ZoomInView;