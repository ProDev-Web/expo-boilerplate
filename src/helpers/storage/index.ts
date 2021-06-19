import AsyncStorage from '@react-native-async-storage/async-storage';
import { isObjectLike } from '@helpers/index';
import { storeType } from './Abstract';

export const addStoreData = async (key:storeType, value: string): Promise<void> => {

  try {

    if (isObjectLike(value)) {

      value = JSON.stringify(value);
    
    }
    await AsyncStorage.setItem(key, value);  
  
  } catch (e) {
    // saving error
  }

};

export const getStoreData = async (key:storeType):Promise<string> => {

  try {

    const value = await AsyncStorage.getItem(key);
    if (value !== null) {

      return value;
    
    }
    return '';
  
  } catch (e) {

    return '';
  
  } 

};

export const removeStoreData = async (key:storeType):Promise<void> => {

  try {

    await AsyncStorage.removeItem(key);
  
  } catch (exception) {

    console.error('error');
  
  }

};
