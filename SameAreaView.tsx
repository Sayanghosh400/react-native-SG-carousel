import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface Props {
    children: React.ReactNode
    styling?: any
}

const SameAreaView = ({ children, styling }: Props) => {
    return (
        <View style={[styles.sameArea, styling]}>
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
})