import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ms} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Video from 'react-native-video';

const MediaHandling = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>Media Handling</Text>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.text}>Video Handling</Text>
          <Video
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            style={styles.video}
            repeat={true}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.text}>Document Handling</Text>
        </View>
      </View>
    </View>
  );
};

export default MediaHandling;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#191932',
    alignItems: 'center',
    flex: 1,
  },
  mainTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: ms(20),
    marginTop: ms(10),
  },
  contentContainer: {
    marginTop: ms(15),
  },
  content: {
    // marginVertical: ms(5),
  },
  text: {
    color: 'white',
    fontSize: ms(14),
    textAlign: 'center',
    marginBottom: ms(5),
  },
  button: {
    marginBottom: ms(10),
    marginHorizontal: ms(10),
    alignItems: 'center',
    backgroundColor: '#E31212',
    paddingVertical: ms(10),
    borderRadius: ms(10),
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: ms(14),
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    alignContent: 'center',
  },
  video: {
    width: 300,
    height: 300,
    marginLeft: ms(50),
    marginBottom: ms(-130),
  },
});
