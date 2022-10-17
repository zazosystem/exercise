import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Buoi4Layout() {
  return (
    <View style={styles.container}>
      <View style={[styles.item,styles.item__purple]}>
        <Text style={styles.item_text}>Purple: #C9C9FF</Text>
      </View>
      <View style={[styles.item,styles.item__blue]}>
        <Text style={styles.item_text}>Blue: #3D85C6</Text>
      </View>
      <View style={[styles.item,styles.item__green]}>
        <Text style={styles.item_text}>Green: #96CC96</Text>
      </View>
      <View style={[styles.item,styles.item__yellow]}>
        <Text style={styles.item_text}>Yellow: #F4B940</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginVertical: 10
    },
    item:{
        padding: 60,
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 10
    },
    item_text:{
        color: 'black',
        fontWeight: 'bold'
    },
    item__purple:{
        backgroundColor: '#C9C9FF'
    },
    item__blue:{
        backgroundColor: '#3D85C6'
    },
    item__green:{
        backgroundColor: '#96CC96'
    },
    item__yellow:{
        backgroundColor: '#F4B940'
    }
});