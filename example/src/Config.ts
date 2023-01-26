import { Platform } from 'react-native';
import ENV from 'react-native-config';

// Address to stripe server running on local machine
export const LOCAL_URL =
  Platform.OS === 'android' ? 'http://10.0.2.2:4242' : 'http://localhost:4242';

export const API_URL = 'https://jameswoo-backend.tunnel.stripe.me/';
