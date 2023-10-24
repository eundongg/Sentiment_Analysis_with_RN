import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {

  const navigation = useNavigation();

  const handleDIaryNavigation = () =>{
    navigation.navigate('Diary');
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>일상 기록</Text>
      <Text style={styles.normalText}>
        아래의 버튼을 누르고 일기를 작성하세요!{' '}
        <Text style={styles.chatGPTText}>chatGPT</Text> 
        가 당신의{' '}
        <Text style={styles.RedText}>
          감정
        </Text>
        을 분석해드립니다!
      </Text>
      <TouchableOpacity 
        activeOpacity={0.8} 
        style={styles.customButton}
        onPress={handleDIaryNavigation}>        
        <Text style={styles.buttonText}>일기 작성</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'space-between',    
    alignItems:'center',
  },
  titleText: {
    fontFamily : 'The-Jamsil-6-ExtraBold',
    fontSize: 70,
    color: 'black',
    textAlign:'center',
    top: 100
  },
  normalText:{
    fontFamily : 'The-Jamsil-2-Light',
    fontSize: 22,
    color: 'gray',
    textAlign: 'center',
    marginHorizontal: 10,
    top: -340,
  },
  customButton:{
    backgroundColor:'#91A8d0',
    padding: 10, 
    borderRadius:5,
    position:'absolute',
    top:450,
  },
  buttonText:{
    fontFamily:'The-Jamsil-3-Regular',
    fontSize:20,
    color: 'white',
  },
  chatGPTText: {
    fontFamily: 'The-Jamsil-3-Regular', 
    fontSize: 21,
    color: 'black',
  },
  RedText: {
    fontFamily: 'The-Jamsil-3-Regular', 
    fontSize: 21,
    color: 'red', 
  },
});

export default MainScreen;
