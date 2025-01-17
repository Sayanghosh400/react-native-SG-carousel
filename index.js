import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SameAreaView from './SameAreaView';

const CustomCaraouselView = ({ children, styling }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const childrenArray = React.Children.toArray(children);
    const totalChildren = childrenArray.length;

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / wp('100%'));
        setActiveIndex(currentIndex);
    };

    return (
        <View>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={[{ marginTop: hp('2%') }, styling]}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {childrenArray}
            </ScrollView>

            <SameAreaView styling={{ flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center', width: wp('9%') }}>
                {childrenArray.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.scrollBubble,
                            activeIndex === index && styles.activeBubble
                        ]}
                    />
                ))}
            </SameAreaView>
        </View>
    )
}

export default CustomCaraouselView

const styles = StyleSheet.create({
    scrollBubble: {
        marginBottom: hp('2%'),
        marginLeft: wp('1%'),
        width: wp('2%'),
        height: hp('1%'),
        backgroundColor: '#ADD3FF',
        borderRadius: 10,
    },
    activeBubble: {
        width: wp('3%'),
        height: hp('1.5%'),
        backgroundColor: '#004CA3',
    },
    dailyUpdateCard: {
        elevation: 3,
        marginTop: hp('1%'),
        alignSelf: 'center',
        width: wp('90%'),
        height: hp('35%'),
    }
});
