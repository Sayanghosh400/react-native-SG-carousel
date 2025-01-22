import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import CustomCarouselView from 'react-native-sg-carousel';

const App = () => {
  return (
    <View style={styles.container}>
      <CustomCarouselView
        bubleColor="#000000"
        activeBubleColor="#FF0000"
        styling={styles.carouselArea}
      >
        <Image source={require('./images/one.png')} style={styles.img} />
        <Image source={require('./images/two.png')} style={styles.img} />
        <Image source={require('./images/three.png')} style={styles.img} />
      </CustomCarouselView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 400,
    height: 400,
  },
  carouselArea: {
    margin: 10,
  },
});
