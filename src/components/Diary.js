import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Diary = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>일기 작성</Text>
      <TextInput
        style={styles.textBox}
        placeholder="일기를 작성하세요."
        multiline={true}
      />
      <TouchableOpacity 
        activeOpacity={0.8} 
        style={styles.customButton}>        
        <Text style={styles.buttonText}>감정 분석</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  titleText: {
    fontFamily:'The-Jamsil-3-Regular',
    fontSize: 40,
    color: 'black',
    top:-100,
  },
  textBox: {
    fontFamily:'The-Jamsil-3-Regular',
    width: '100%',
    height: 300,
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 1,
    marginTop: 10,
    padding: 8,
    top: -80
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
});

export default Diary;
