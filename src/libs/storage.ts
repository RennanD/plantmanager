import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  frequency: {
    times: number;
    repeat_ever: string;
  };
  environments: string[];
  datetimeNotification: Date;
}
