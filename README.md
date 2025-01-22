# react-native-sg-carousel

`react-native-sg-carousel` is a lightweight and customizable carousel component for React Native. It supports dynamic content and allows you to style the carousel and its indicators easily.

---

## Installation

Install the package using npm or yarn:

```bash
npm install react-native-sg-carousel

yarn add react-native-sg-carousel

```

## Props

<details>
  <summary>Props Table</summary>

| Prop Name         | Type      | Required | Description                                                              |
|--------------------|-----------|----------|--------------------------------------------------------------------------|
| `children`         | ReactNode | Yes      | The elements to be rendered inside the carousel.                        |
| `styling`          | Object    | No       | Custom styles for the carousel container.                               |
| `bubleColor`       | String    | No       | Background color for the inactive indicator bubbles.                    |
| `activeBubleColor` | String    | No       | Background color for the active indicator bubble.                       |

</details>



## Usage
```js
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
    minHeight: '100%',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 400,
    height: 400,
  },
  carouselArea: {
    margin: 10
  },
});
```
