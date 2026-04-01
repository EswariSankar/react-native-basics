import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FadeInView from './FadeInView';
import ZoomInView from './ZoomInView';

export default function SplashScreen() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 1200);

    // ✅ No navigation here — App.tsx handles it automatically
    return () => clearTimeout(textTimer);
  }, []);

  return (
    <View style={styles.container}>
      <FadeInView>
        <ZoomInView>
          <Image
            source={require('../assets/logo.jpg')}
            style={styles.logo}
          />
        </ZoomInView>
      </FadeInView>

      {showText && (
        <FadeInView>
          <ZoomInView>
            <Text style={styles.title}>VOTEX</Text>
            <Text style={styles.subtitle}>Welcome!</Text>
          </ZoomInView>
        </FadeInView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4A90E2'
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: '800'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5
  }
});