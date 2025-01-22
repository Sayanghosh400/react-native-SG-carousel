import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const CustomCaraouselView = ({
    children,
    styling,
    bubleColor,
    activeBubleColor,
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const childrenArray = React.Children.toArray(children);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / wp('100%'));
        setActiveIndex(currentIndex);
    };

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={[styles.scrollContainer, styling]}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {childrenArray.map((child, index) => (
                    <View key={index} style={styles.slide}>
                        {child}
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bubbleContainer}>
                {childrenArray.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.scrollBubble,
                            activeIndex === index && styles.activeBubble,
                            bubleColor && { backgroundColor: bubleColor },
                            activeBubleColor && activeIndex === index && { backgroundColor: activeBubleColor },
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

export default CustomCaraouselView;

const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        alignItems: 'center',
    },
    scrollContainer: {
        width: wp('100%'),
        flexGrow: 0, // Prevents ScrollView from taking extra space
    },
    slide: {
        width: wp('100%'), // Ensures each slide takes the full width
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollBubble: {
        marginLeft: wp('1%'),
        width: wp('2%'),
        height: hp('1%'),
        backgroundColor: '#ADD3FF',
        borderRadius: 10,
    },
    activeBubble: {
        marginLeft: wp('1%'),
        width: wp('3%'),
        height: hp('1.5%'),
        backgroundColor: '#004CA3',
        borderRadius: 10,
    },
    bubbleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: wp('10%'),
        marginTop: hp('2%'),
    },
});
