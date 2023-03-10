import { View, Pressable, Text, Alert } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useEffect } from 'react';
import Truck from './Button';
import Button from './Button';


function Title({navigation}) {

    
   
  return (
    <View style={styles.titleContainer}>
    <Pressable style={styles.button} onPress={() => alert(`You are an inquisitive kid!`)}>
    <Text style={styles.text}>Luca's Play</Text>
      <Text style={styles.smallText}>(and Learn)</Text>
      <Text style={styles.text}>Ground!</Text>
    </Pressable>
    <Truck label="ABC's" nav="Letters" navigation={navigation}/>
      <Truck label = "123's" nav="Numbers" navigation={navigation}/>
      <Truck label = "Colors" nav="Colors" navigation={navigation}/>
      <Truck label = "Animals" nav="Animals" navigation={navigation}/>
  </View>
  )
}

export default Title
const styles = EStyleSheet.create({
    titleContainer:{
        backgroundColor: 'yellow',
        alignItems:'center',
        justifyContent: 'space-between',
    },
text:{
    color: 'red',
    fontSize: 50,
    fontWeight: "bold",
    alignItems:'center',
    textAlign:'center',
  },
  smallText:{
    fontSize: 20,
    color: 'orange',
    marginTop: -10,
    marginBottom: -15,
    fontWeight: 'bold',
    alignItems:'center',
    textAlign:'center',
  }
})