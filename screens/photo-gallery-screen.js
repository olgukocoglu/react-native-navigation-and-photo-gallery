import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';

import { Asset } from 'expo-asset';
import Swiper from 'react-native-swiper';
import { AntDesign } from '@expo/vector-icons';

import layout from '../constants/Layout';

const loadingSpinnerSmall = require('../assets/misc/loading-spinner-sm.gif');
const loadingSpinnerMedium = require('../assets/misc/loading-spinner-md.gif');

export default class PhotoGalleryScreen extends React.Component {
  state = {
    imageIndex: 0,
    modalVisible: false
  };

  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  openImage = (imageIndex) => {
    this.setState({ imageIndex, modalVisible: true });
  };

  render() {
    if (this.state.modalVisible) {
      return (
          <View style={ { flex:1 } }>
            <Modal>
              <AntDesign name="close" onPress={ () => { this.closeModal() } } style={ styles.closeIcon } />
              <ImageSlide imageList={ this.props.imageList } imageIndex={ this.state.imageIndex }/>
            </Modal>
          </View>
      )
    }
    else {
      return (
          <View style={ { flex:1 } }>
            <ScrollView style={ styles.container }>
              <View style={ styles.contentContainer }>
                <ImageGallery imageList={ this.props.imageList } openImage={ this.openImage } />
              </View>
            </ScrollView>
          </View>
      )
    }
  };
}

class ImageSlide extends React.Component {
  render() {
    const slideImages = [];

    for (let i = 0; i < this.props.imageList.length; i++) {
      slideImages.push(
          <ScrollView key={i} scrollEnabled={ true } style={ { backgroundColor: 'black' } } maximumZoomScale={ 10 }>
            <ImageWithPlaceHolder key={i} imageSource={ this.props.imageList[i] } loadingIndicatorSource={ loadingSpinnerSmall }
                                  style={ { width: layout.window.width, height: layout.window.height, resizeMode: 'contain' } }/>
          </ScrollView>
      );
    }

    return (
        <Swiper showsButtons={ true } index={ this.props.imageIndex } dotColor={ '#FFFFFF' }>
          { slideImages }
        </Swiper>
    )
  }
}

class ImageGallery extends React.Component {
  render() {
    const imageGallery = [];

    for (let i=0; i<this.props.imageList.length; i++) {
      const image = this.props.imageList[i];

      imageGallery.push(
          <GalleryImage key={i} imageSource={ image } imageIndex={ i } openImage={ this.props.openImage }/>
      );
    }

    return imageGallery;
  }
}

class GalleryImage extends React.Component {
  render() {
    return (
        <View style={ styles.imageContentWrapper }>
          <TouchableHighlight onPress={ () => { this.props.openImage(this.props.imageIndex) } }>
            <ImageWithPlaceHolder style={ styles.galleryImage } imageSource={ this.props.imageSource } loadingIndicatorSource={ loadingSpinnerMedium }/>
          </TouchableHighlight>
        </View>
    )
  }
}

class ImageWithPlaceHolder extends React.Component {
  state = {
    imageUri: null,
  };

  componentDidMount() {
    const imageUri = Asset.fromModule(this.props.imageSource).localUri;

    if (imageUri) {
      this.setState({ imageUri });
    }
    else {
      Asset.loadAsync(this.props.imageSource).then(() => {
        this.setState({ imageUri: Asset.fromModule(this.props.imageSource).localUri });
      });
    }
  }

  render() {
    return (
        <Image style={ this.props.style } source={ { uri: this.state.imageUri ? this.state.imageUri : Asset.fromModule(this.props.loadingIndicatorSource).localUri } }/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%',
  },
  contentContainer: {
    paddingTop: 30,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: -10,
  },
  imageContentWrapper: {
    width: '30%',
    height: 100,
    marginTop: 10,
  },
  galleryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closeIcon: {
    position: 'absolute',
    right: 20,
    top: 50,
    color: '#007aff',
    fontSize: 25,
    zIndex: 1,
  },
});
