import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Task = (props) => {

    return(
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <Text style={styles.itemText}>{props.text} {' '}</Text>
                    <Text style={styles.itemDate}>{new Date().getMonth() + 1}/{new Date().getDate()}</Text>
                </View>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles= StyleSheet.create({
    item: {
        backgroundColor: '#353535',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#BB86FC',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
        color: '#fff',
    },
    itemDate: {
        maxWidth: '80%',
        color: '#fff',
        fontWeight: 'bold',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#BB86FC',
        borderWidth: 2,
        borderRadius: 5,
    }
})

export default Task;