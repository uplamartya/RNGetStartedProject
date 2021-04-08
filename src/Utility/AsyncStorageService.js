import AsyncStorage from '@react-native-community/async-storage';
import _ from 'lodash';

export const StorageKeys = {
	USER_DETAILS: 'STORE',
	IS_LOGGED_IN: 'IS_LOGGED_IN',
	
};

class LocalStorageHelper {
	getItemsFromStorage = keys => new Promise((resolve, reject) => {
		AsyncStorage.multiGet(keys)
			.then((resp) => {
				const finalVal = _.reduce(resp, (obj, values) => {
					const key = values[0];
					obj[key] = values[1];
					return obj;
				}, {});
				resolve(finalVal);
			})
			.catch(err => reject(err));
	})

	getItemFromStorage = key => new Promise((resolve, reject) => {
		AsyncStorage.getItem(key)
			.then((resp) => {
				resolve(resp);
			})
			.catch(err => reject(err));
	})

	setStorageItems = data => new Promise((resolve, reject) => {
		AsyncStorage.multiSet(_.toPairs(data))
			.then((resp) => {
				resolve(resp);
			})
			.catch(err => reject(err));
	})

	setStorageItem = ({ key, value }) => new Promise((resolve, reject) => {
		AsyncStorage.setItem(key, value)
			.then((resp) => {
				resolve(resp);
			})
			.catch(err => reject(err));
	})

	removeStorageItems = keys => new Promise((resolve, reject) => {
		AsyncStorage.multiRemove(keys)
			.then((resp) => {
				resolve(resp);
			})
			.catch(err => reject(err));
	})

	clearStorage = () => new Promise((resolve, reject) => {
		AsyncStorage.clear()
			.then((resp) => {
				resolve(resp);
			})
			.catch(err => reject(err));
	})
}
export const localStorageHelper = new LocalStorageHelper();
