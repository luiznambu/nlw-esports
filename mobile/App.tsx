import { useRef, useEffect } from 'react';
import { StatusBar } from 'react-native';

import * as Notifications from 'expo-notifications';

import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black
} from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';

import './src/services/notificationConfigs';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import { Subscription } from 'expo-modules-core';

//como melhorar essa aplicacao mobile?
//autenticacao, notificacoes por push, criar um ad pelo mobile?

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  });

  const getNotificationListener = useRef<Subscription>();
  const responseNotificationListener = useRef<Subscription>();

  useEffect(() => {
  getPushNotificationToken();
  })

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification);
    });

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current);
        Notifications.removeNotificationSubscription(responseNotificationListener.current);
      }
    }
  },[])

  return (
    <Background>
      <StatusBar //deixando a barra de status branca e transparente
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/*se a fonte esta carregada carrega Home, se nao, mostra Loading */}
      {fontsLoaded ? <Routes /> : <Loading /> } 

    </Background>
  );
}
