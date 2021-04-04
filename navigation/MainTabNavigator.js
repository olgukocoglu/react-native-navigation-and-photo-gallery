import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import HomeScreen from '../screens/home-screen';

import Colors from '../constants/Colors';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import PhotoGalleryScreen from '../screens/photo-gallery-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderMenuButton from '../helpers/header-menu-button';

import firstGalleryImageList from '../assets/images/first-gallery-photos';
import secondGalleryImageList from '../assets/images/second-gallery-photos';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomepageStack = createStackNavigator(
  {
    Homepage: HomeScreen,
  },
  config
);

HomepageStack.navigationOptions = {
  title: 'Homepage',
};

HomepageStack.path = '';

const PhotosTopTabNavigator = createMaterialTopTabNavigator({
  FirstGalleryPhotos: {
    screen: () => (
        <PhotoGalleryScreen imageList={ firstGalleryImageList }/>
    ),
    navigationOptions: {
      tabBarLabel: "First Gallery Photos",
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-phone-portrait" color={ tintColor } size={24} />
      )
    }
  },
  SecondGalleryPhotos: {
    screen: () => (
        <PhotoGalleryScreen imageList={ secondGalleryImageList }/>
    ),
    navigationOptions: {
      tabBarLabel: "Second Gallery Photos",
      tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-phone-portrait" color={ tintColor } size={24} />
      )
    }
  }
}, {
  initialRouteName: 'FirstGalleryPhotos',
  lazy: true,
  tabBarOptions: {
    activeTintColor: Colors.activeMenuButton,
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#f2f2f2'
    },
    indicatorStyle: {
      color: Colors.activeMenuButton,
      backgroundColor: Colors.activeMenuButton,
    },
    showIcon: true
  }
});

PhotosTopTabNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: 'Photos',
    headerLeft: HeaderMenuButton(navigation),
  }
};

const PhotosStack = createStackNavigator(
  {
    Photos: PhotosTopTabNavigator,
  },
  config
);

PhotosStack.navigationOptions = {
  title: 'Photos',
};

PhotosStack.path = '';

const tabNavigator = createDrawerNavigator({
  HomepageStack,
  PhotosStack,
},
{
  contentOptions: {
    activeTintColor: Colors.activeMenuButton,
  }
});

tabNavigator.path = '';

export default tabNavigator;
