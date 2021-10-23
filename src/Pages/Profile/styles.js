import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: "100%",
  },
  ProfileUser: {},
  ProfilePicture: {
    width: 100,
    height: 100,
    backgroundColor: "#D2D2D2",
    alignSelf:  'center',
    borderRadius: 500,
    marginTop: -50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  DonateInfo: {
    width: '20%',
    height: '20%',
  },
  PurpleTop: {
    backgroundColor: '#6D0AD6',
    height: '18%',
  },
  ProfileStatusIcon: {
    width: 15,
    height: 15,
    backgroundColor: "#20D659",
    borderRadius: 100,
    marginRight: 10,
  },
  ProfileStatus: {
    color: "#939393",
    fontSize: 18,
  },
  ProfileSection: {
    // alignSelf: 'center',
    alignItems: 'center',
    width: "100%",
  },
  ProfileName: {
    fontWeight: 'bold',
    marginTop: 25,
    fontSize: 25,
  },
  ProfileSignUp: {
    marginTop: 15,
    color: "#515151",
  },
  DataConfirmated: {
    width: 20,
    height: 20,
    backgroundColor: "#13CF5E",
    marginRight: 10,
    borderRadius: 50,
    justifyContent: 'center',
  },
  DataNotConfirmated: {
    width: 20,
    height: 20,
    backgroundColor: "#E2E2E2",
    marginRight: 10,
    borderRadius: 50,
    justifyContent: 'center',
  },
  OrderConFace: {
    color: "#6D0AD6",
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 11,
  },
  ProfileConfirmation: {
    marginLeft: 85,
    marginRight: 'auto',
  },
  SocialIcons: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  AmounDon: {
    width: 40,
    height: 40,
    marginRight: 'auto',
    marginLeft: -43,
    marginTop: -6,
  },
  TextAmountDon: {
    backgroundColor: "red",
    flexDirection: 'row',
  },
});

export default styles;
