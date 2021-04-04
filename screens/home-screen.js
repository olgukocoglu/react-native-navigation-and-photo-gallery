import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import HeaderMenuButton from '../helpers/header-menu-button'

export default function HomeScreen() {
  return (
    <View style={ styles.container }>
      <ScrollView style={ styles.container }>
        <View style={ styles.homePageTextWrapper }>
          <Text style={ styles.homePageText }>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Id interdum velit laoreet id donec ultrices tincidunt. Id diam vel quam elementum pulvinar etiam non quam lacus.
            Amet nisl purus in mollis nunc sed id semper risus. Vitae purus faucibus ornare suspendisse sed nisi lacus sed.
            Tortor vitae purus faucibus ornare suspendisse sed. Tempor orci eu lobortis elementum nibh.
            Blandit aliquam etiam erat velit scelerisque in dictum. Non sodales neque sodales ut etiam sit amet.
            Ut tellus elementum sagittis vitae et leo. Diam vulputate ut pharetra sit amet aliquam.
            Erat imperdiet sed euismod nisi porta lorem mollis aliquam. Eget felis eget nunc lobortis mattis aliquam faucibus purus in.
            At elementum eu facilisis sed odio morbi quis. Turpis in eu mi bibendum neque egestas congue.
            Augue neque gravida in fermentum et sollicitudin. Aliquam ut porttitor leo a diam sollicitudin tempor id.
            Amet justo donec enim diam vulputate ut. Fermentum leo vel orci porta non pulvinar neque.
            A scelerisque purus semper eget duis at tellus at urna. Id eu nisl nunc mi. Ut porttitor leo a diam.
            Id semper risus in hendrerit gravida rutrum. Bibendum neque egestas congue quisque egestas.
            Semper auctor neque vitae tempus. Imperdiet proin fermentum leo vel orci porta non pulvinar.
            Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Sit amet est placerat in egestas erat imperdiet.
            At consectetur lorem donec massa sapien faucibus et. Nam at lectus urna duis convallis convallis tellus.
            Scelerisque in dictum non consectetur a.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    title: 'Homepage',
    headerLeft: HeaderMenuButton(navigation),
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homePageTextWrapper: {
    alignItems: 'center',
    marginHorizontal: 50,
    paddingTop: 30,
  },
  homePageText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
