import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SameAreaView from './SameAreaView';

const CustomCaraouselView = ({
    children,
    styling,
    bubleColor,
    activeBubleColor
}) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const childrenArray = React.Children.toArray(children);

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
                style={[styling]}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                {childrenArray}
            </ScrollView>

            <SameAreaView styling={styles.bubbleContainer}>
                {childrenArray.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.scrollBubble,
                            activeIndex === index && styles.activeBubble,
                            { backgroundColor: bubleColor },
                            { backgroundColor: activeIndex === index && activeBubleColor }
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
    bubbleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        width: wp('10%'),
        marginBottom: hp('2%'),
    }
});
