import AsyncStorage from '@react-native-async-storage/async-storage';
import { format } from 'date-fns';

import * as Notifications from 'expo-notifications';

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
  hour: string;
}

export interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
    notificationId: string;
  };
}

export async function deletePlant(id: string): Promise<void> {
  const data = await AsyncStorage.getItem('@plantmanager:plants');
  const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

  await Notifications.cancelScheduledNotificationAsync(
    plants[id].notificationId,
  );

  delete plants[id];

  await AsyncStorage.setItem('@plantmanager:plants', JSON.stringify(plants));
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const nextTime = new Date(plant.datetimeNotification);
    const now = new Date();

    const { times, repeat_ever } = plant.frequency;

    if (repeat_ever === 'week') {
      const interval = Math.trunc(7 / times);
      nextTime.setDate(now.getDate() + interval);
    } else {
      nextTime.setDate(nextTime.getDate() + 1);
    }

    const seconds = Math.abs(
      Math.ceil((now.getTime() - nextTime.getTime()) / 1000),
    );

    const notificationId = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Heeey, 🌱',
        body: `Está na hora de cuidadar da sua ${plant.name}`,
        sound: true,
        priority: Notifications.AndroidNotificationPriority.HIGH,
        data: { plant },
      },
      trigger: {
        seconds: seconds < 60 ? 60 : seconds,
        repeats: true,
      },
    });

    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
        notificationId,
      },
    };

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify({ ...oldPlants, ...newPlant }),
    );
  } catch (error) {
    throw new Error(error);
  }
}

export async function loadPlants(): Promise<PlantProps[]> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const plantsSorted = Object.keys(plants)
      .map(plant => {
        return {
          ...plants[plant].data,
          hour: format(
            new Date(plants[plant].data.datetimeNotification),
            'HH:mm',
          ),
        };
      })
      .sort((a, b) =>
        Math.floor(
          new Date(a.datetimeNotification).getTime() / 1000 -
            Math.floor(new Date(b.datetimeNotification).getTime() / 1000),
        ),
      );

    return plantsSorted;
  } catch (error) {
    throw new Error(error);
  }
}
