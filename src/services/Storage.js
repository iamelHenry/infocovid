import { AsyncStorage } from 'react-native';
const item = '@infocovid:fav';

export async function getFav() {
  try {    
    const result = await AsyncStorage.getItem(item);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function updateFav(id) {
  try {
    let favorites = await getFav();
    let favList = favorites?.split(',') || [];
    if (favList.includes(id)) {
      favList = favList.filter(el => el != id)
    } else {
      favList.push(id);
    }
    await AsyncStorage.setItem(
      item,
      favList.join());
  } catch (error) {
    console.error(error);
  }
}