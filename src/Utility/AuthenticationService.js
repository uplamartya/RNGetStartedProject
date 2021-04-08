import {localStorageHelper, StorageKeys} from '/Utility/AsyncStorageService';

/**
 * @function
 * @param {function} onSuccess -  function to execute on user already logged in
 * @param {function} onFailure -  function to execute on user not logged in
 */
export default function isUserAuthentic({onSuccess, onFailure}) {
  //get login status from async storage
  localStorageHelper
    .getItemFromStorage(StorageKeys.IS_LOGGED_IN)
    .then(status => {
      switch (status) {
        case 'true':
          onSuccess();
          break;
        default:
          onFailure();
          break;
      }
    })
    .catch(err => {
      console.log('error checking login status', err);
    });
}
