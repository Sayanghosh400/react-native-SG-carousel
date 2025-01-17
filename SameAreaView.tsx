import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SameAreaView = ({ children, styling, center }: { children: React.ReactNode, styling?: any, center?: boolean }) => {
    return (
        <View style={[styles.sameArea, center && styles.centeredView, styling]}>
            {children}
        </View>
    )
}

export default SameAreaView

const styles = StyleSheet.create({
    sameArea: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    centeredView: {
        justifyContent: 'space-between',
        width: wp('90%'),
        alignSelf: 'center',
        marginTop: hp('5%'),
    }
})