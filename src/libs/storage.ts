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
  hour: string;
}

interface StoragePlantProps {
  [id: string]: {
    data: PlantProps;
  };
}

export async function savePlant(plant: PlantProps): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlantProps) : {};

    const newPlant = {
      [plant.id]: {
        data: plant,
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
