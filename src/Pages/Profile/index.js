import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const Profile = () => {
  const amountDonated = 224.50;
  const profileName = "Profile Name"

  return (
    <View style={styles.container}>
      <View style={styles.PurpleTop}>
      </View>
      <View style={styles.ProfilePicture}>
        <Text style={{color: "#fff", fontSize: 60}}>M</Text>
      </View>
      <View style={styles.ProfileSection}>
        <Text style={styles.ProfileName}>{profileName}</Text>
        <View style={{ flexDirection: "row", marginTop: 15}}>
          <View style={styles.ProfileStatusIcon}></View>
          <Text style={styles.ProfileStatus}>Online agora</Text>
        </View>
        <Text style={styles.ProfileSignUp}>Na OLX desde dezembro de 2018</Text>
        <View 
          style={{
            borderBottomColor: '#E5E5E5',
            borderBottomWidth: 2,
            width: "100%",
            marginTop: 30,
          }}
        />
        <View style={styles.ProfileConfirmation}>
          <View style={{ flexDirection: "row" , marginTop: 15}}>
            <View style={styles.DataConfirmated}>
              <Image
                style={styles.SocialIcons}
                source={require('../../assets/mailIcon.png')}
              />
            </View>
            <Text>Email Validado</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View style={styles.DataConfirmated}>
              <Image 
                style={styles.SocialIcons}
                source={require('../../assets/phoneIcon.png')}
              />
            </View>
            <Text>Telefone validado</Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <View style={styles.DataNotConfirmated}>
            <Image 
                style={styles.SocialIcons}
                source={require('../../assets/facebookIcon.png')}
              />
            </View>
            <Text>Facebook não conectado</Text>  
          </View>
          <Text style={styles.OrderConFace}>Conecte seu Facebook</Text>
          <View style={{flexDirection: "row", marginTop: 40}}>
            <Image 
                style={styles.AmounDon}
                source={require('../../assets/AcountDonated.png')}
            />
            <Text>{profileName} já doou
              <Text style={{color: "#20D659", fontWeight: 'bold'}}> R$ {amountDonated} </Text> 
              para a ONG Team Trees
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
