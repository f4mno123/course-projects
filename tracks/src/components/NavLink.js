import React from "react";
import { Text, TouchableOpacity, StyleSheet} from  'react-native'
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, loginText, routeName }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.loginText}>{loginText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    loginText: {
        color: 'blue'
      }
});

export default withNavigation(NavLink);