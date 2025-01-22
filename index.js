import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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

            <View style={styles.bubbleContainer}>
                {childrenArray.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.scrollBubble,
                            activeIndex === index && styles.activeBubble,
                            bubleColor && { backgroundColor: bubleColor },
                            activeBubleColor && { backgroundColor: activeIndex === index && activeBubleColor }
                        ]}
                    />
                ))}
            </View>
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
    }
});
