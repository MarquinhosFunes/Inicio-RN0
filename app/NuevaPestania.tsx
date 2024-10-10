import {StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import { ThemedText } from '@/components/ThemedText';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();


export default function Index() {
    const [loaded, error] = useFonts({
        'Bebas-Nehue': require('../assets/fonts/BebasNeue-Regular.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }
  return (
    <View style={styles.container}>
        <View style={styles.cuadro}>
        <ThemedText style={{ fontFamily: 'Bebas-Nehue', fontSize: 25}}>
            Hola, esta es la tercera pestaña
          </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }}></Image>
        </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#808080",

    },
    cuadro: {
        backgroundColor: "#3b3b3b",
        padding: 20,
        borderRadius: 10
    },
});