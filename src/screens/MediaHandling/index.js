import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import Video from 'react-native-video';
import Pdf from 'react-native-pdf';

const MediaHandling = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.mainTitle}>Media Handling</Text>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.text}>Video Handling</Text>
          <Video
            source={{
              uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            style={styles.video}
            repeat={true}
          />
        </View>
        <View>
          <Text style={styles.text}>Document Handling</Text>
          <Pdf
            source={{
              uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf',
            }}
            style={styles.pdf}
            fullscreen
          />
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
  text: {
    color: 'white',
    fontSize: ms(14),
    textAlign: 'center',
    marginBottom: ms(5),
  },
  video: {
    width: ms(300),
    height: ms(300),
    marginLeft: ms(80),
    marginBottom: ms(-130),
  },
  pdf: {
    width: ms(300),
    height: ms(300),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
