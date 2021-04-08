import { NavigationActions, StackActions } from 'react-navigation';

/**
 * @function
 * @param {Navigation} navigation - instance of navigation
 * @param {String} redirectOption - Option of redirecting (eg-navigate,replace,reset etc)
 * @param {String} redirectDestination - Component name to which to redirect
 * @param {Object} extras - extras to pass with navigation as props
 */

export function letsRedirect(navigation, redirectOption, redirectDestination, extras) {

    navigation[redirectOption](redirectDestination, extras)
}


/**
 * @function
 * @param {*} Navigation - instance of navigation 
 * @param {*} redirectDestination - Component name to which to redirect
 * @param {*} extras - extras to pass with navigation as props
 */
export function resetStack(Navigation, redirectDestination, extras = {}) {
    Navigation.dispatch(
        StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: redirectDestination,
                    params: extras,
                }),
            ],
        }),
    );
};
