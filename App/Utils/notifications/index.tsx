import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {Platform} from 'react-native';
import {CloneContext} from '../../usingContextApi';
import PushNotification, { Importance } from 'react-native-push-notification';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken();
  }
}
//const getFCMToken = async () => {   //both are right
async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken, 'the old token');

  if (!fcmToken) {
    try {
      let fcmtoken = await messaging().getToken();
      if (fcmtoken) {
        console.log(fcmtoken, 'the new generated token');
        await AsyncStorage.setItem('fcmToken', fcmtoken);
      }
    } catch (error) {
      console.log(error, 'error raised in fcmtoken');
    }
  }
}

export const NotificationListener = () => {
  const { setClickedRestaurant_id }: any = useContext(CloneContext);
  const navigation: any = useNavigation();

  // Assume a message-notification contains a "type" property in the data payload of the screen to open
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    if (Platform.OS === 'android') {
      const idx = remoteMessage.data.restaurant_id;
      setClickedRestaurant_id(idx);
      navigation.navigate('RestaurantDetails', {});
    }
  });

  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

  //register background handler
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  return null;
};

export const ForegroundHandler = () => {
  const {setClickedRestaurant_id}: any = useContext(CloneContext);
  const navigation: any = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('notification on foreground state.....', remoteMessage);
  //     // console.log(remoteMessage.data.id);
  //     if (Platform.OS == 'android') {
  //       const idx = remoteMessage.data.id;
  //       setIdno(idx);
  //       navigation.navigate('RestaurantDetails', {});
  //     }
  //   });
  // return unsubscribe;
  // }, []);
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'channel-id', // (required)
        channelName: 'My channel', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        playSound: false, // (optional) default: true
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('notification on foreground state.....', remoteMessage);
      const {messageId, notification} = remoteMessage;
      const notificationObj: any = {
        channelId: 'channel-id',
        title: notification?.title,
        message: notification?.body,
        soundName: 'default',
        vibrate: true,
        playSound: true,
        messageId: messageId,
        visibility: 'public',
        ignoreInForeground: false,
        importance: 'high',
        picture: notification?.android?.smallIcon,
      };

      if (Platform.OS === 'android') {
        PushNotification.configure({
          onNotification: function (notification) {
            const {foreground, userInteraction, message} = notification;
            if (foreground && message && userInteraction) {
              const idx = remoteMessage.data.restaurant_id;
              setClickedRestaurant_id(idx);
              navigation.navigate('RestaurantDetails', {});
            }
          },
        });
        PushNotification.localNotification(notificationObj);
      }
    });
    return unsubscribe;
  }, []);

  return null;
};
