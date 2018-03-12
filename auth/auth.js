/**
 * Created by jocelio on 18/02/18.
 */
import {AsyncStorage} from "react-native";

export const USER_KEY = "auth-key";

export const onSignIn = token => {
    return AsyncStorage.setItem("access_token", token).then(() => {
        return AsyncStorage.setItem(USER_KEY, "true")
    });
}

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            })
            .catch(err => reject(err));
    });
};
