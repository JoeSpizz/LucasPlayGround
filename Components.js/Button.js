import { Animated, View, Text, Easing, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useRef, useEffect } from 'react';
import { Pressable } from 'react-native-web';


export default function Button({label, nav, navigation}) {
    const transX = useRef(new Animated.Value(-160)).current;
    const transY = useRef(new Animated.Value(-50)).current;
    const spinValue = useRef(new Animated.Value(0)).current;
    const engine = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      })
    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            transX.setValue(-160);
            transY.setValue(-50)
            Animated.parallel([
              Animated.timing(transX, {
                toValue: 0,
                useNativeDriver: true,
              }),
              Animated.timing(transY, {
                toValue: (0),
                useNativeDriver: true,
              }),
        ]).start()})
        return focusHandler;

    }, [navigation]);

const wiggle = ()=>{
    let down = Animated.timing(spinValue,{
        toValue: -.01,
        duration: 75,
        easing: Easing.linear, 
        useNativeDriver: true  
      })
      let up = Animated.timing(spinValue,{
        toValue: .01,
        duration: 75,
        easing: Easing.linear, 
        useNativeDriver: true  
      })
        Animated.sequence([
            up,
            down,
            up,
            down,
            up,
            down,
            up,
            down,
            up,
            down,
            Animated.timing(spinValue,{
                toValue: 0,
                duration: 100,
                easing: Easing.linear, 
                useNativeDriver: true  
              }),
             
            Animated.timing(transX, {
                toValue: 300,
                useNativeDriver: true,
              }),
             
        ]).start(()=> {navigation.navigate(`${nav}`)});
    
}



  return (
    <Animated.View style={{
        height: 100,
        borderColor: "#0000FF",
        borderStyle: "solid",
        borderWidth: 5,
        marginLeft: 15,
        transform: [{ translateX: transX}, {translateY: transY}, {rotate: engine}],
      }}>
        
    <Text
    onPress={wiggle}
    >
      <Image style={styles.buttonImage} source={require('./truck2.png')}/>
   </Text>

   
  </Animated.View>
  )
}

const styles = EStyleSheet.create({
    buttonLabel: {
      color: '#195DF9',
      fontSize: 10,
      fontWeight: '800',
      
    },
    buttonImage:{
        height: 60,
        width: 110,
        position: 'absolute'
    }
  });
 