import React from 'react';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function headerMenuButton(navigation) {
    return (
        <FontAwesome name="bars" style={styles.menuButton} onPress={ () => { navigation.openDrawer() } }/>
    )
}

const styles = StyleSheet.create({
    menuButton: {
      left: 20,
      fontSize: 25,
    }
});
