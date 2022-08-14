import React from 'react';
import {Dimensions, useColorScheme} from 'react-native';

export const Colors = {
  black: '#000000',
  alerttxtcolor: '#606060',
  white: '#FFFFFF',
  red: '#ED001C',
  lightBlue: '#9AB8BE',
  skyBlue: '#61d2a4',
  offWhite: '#E9EFE5',
  splashtxtcolor: '#1A372E',
  lineargraddarkcolor: '#183A4A',
  lineargradlightcolor: '#61D2A4',
  saloginbtnback: '#61D2A4',
  sosbtncolor: '#DA605C',
  gray: '#AAAA',
  darkermidgray: '#999',
  darkgray: '#888',
  mdgray: '#BFBFBF',
  lightgray: '#F2F2F2',
  textColor: '#183A4A',
  transparentlightblack: 'rgba(0, 0, 0, 0.25)',
  transparent: 'rgba(0, 0, 0, 0.00)',
  transparentwhite: 'rgba(255, 255, 255, 0.4)',
  buttonRed: '#D91A08',
};

export const Images = {
  eye: require('../Assets/Images/ic_eye.png'),
  password: require('../Assets/Images/ic_password.png'),
  eyeClose: require('../Assets/Images/eyeClose.png'),
  editPencil: require('../Assets/Images/editPencil.png'),
  userIcon: require('../Assets/Images/user_light.png'),
  signInbackground: require('../Assets/Images/bg.png'),
  stoneBossImage: require('../Assets/Images/logo.png'),
  splashScreenImage: require('../Assets/Images/Splash.jpg'),
  productBanner: require('../Assets/Images/productBanner.png'),
  orderBanner: require('../Assets/Images/orderBanner.png'),
  orderIcon: require('../Assets/Images/orderIcon.png'),
  productIcon: require('../Assets/Images/productIcon.png'),
  logout: require('../Assets/Images/logout.png'),
};

export const Dimension = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

export const fonts = {
  PoppinsBlack: 'Poppins-Black',
  PoppinsBold: 'Poppins-Bold',
  PoppinsExtraBold: 'Poppins-ExtraBold',
  PoppinsSemiBold: 'Poppins-SemiBold',
  PoppinsMedium: 'Poppins-Medium',
  PoppinsRegular: 'Poppins-Regular',
  PoppinsLight: 'Poppins-Light',
  PoppinsExtraLight: 'Poppins-ExtraLight',
  PoppinsThin: 'Poppins-Thin',
};

export const SplashScreen = {
  fontsize: 16,
};

export const SelectAuthScreen = {
  headerfontsize: 18,
  btnfontsize: 16,
};
