import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ScrollView,Modal } from 'react-native';

import { analyzeEmotion } from '../../api/chatGPTAPI';


const Diary = () => {
  const [diaryText, setDiaryText]=useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  const handleEmotionAnalysis = async() =>{    
    if(!diaryText) return;

    const analyzedEmotion = await analyzeEmotion(diaryText);
    const chatGPTResponse = analyzedEmotion.choices[0].message.content;
    setAnalysisResult(chatGPTResponse);
    setModalVisible(true);    
    setDiaryText('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>일기 작성</Text>
      <TextInput
        style={styles.textBox}        
        multiline={true}
        value ={diaryText}
        onChangeText={setDiaryText} 
        placeholder={`        1. 쌍따옴표 안에 일기를 작성
        2. 마지막 문장을 '감정을 분석해줘'라고 작성
        3. 감정 분석 버튼 클릭`}
      />
      <TouchableOpacity 
        activeOpacity={0.8} 
        style={styles.customButton}
        onPress={handleEmotionAnalysis}>        
        <Text style={styles.buttonText}>감정 분석</Text>
      </TouchableOpacity>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>감정 분석 결과</Text>            
            <ScrollView>
              <Text>{JSON.stringify(analysisResult)}</Text>
            </ScrollView>
            <View style={styles.horizontalLine}/>      
            <TouchableOpacity 
              activeOpacity={0.8} 
              style={styles.modalButton}
              onPress={()=>setModalVisible(false)}>        
              <Text style={styles.buttonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>        
      </Modal>
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
    top: -70
  },
  customButton:{
    backgroundColor:'#91A8d0',
    padding: 10, 
    borderRadius:5,
    position:'absolute',
    top:550,
  },
  buttonText:{
    fontFamily:'The-Jamsil-3-Regular',
    fontSize:20,
    color: 'white',
  },
  modalButton:{
    backgroundColor:'#91A8d0',
    padding: 10, 
    borderRadius:5,
    position:'absolute',
    top:315,
  },
  modalText: {
    fontFamily: 'The-Jamsil-3-Regular',
    fontSize: 17,
    color: 'black',
  },
  modalView:{
    margin: 20,
    marginTop:20,
    backgroundColor: 'white',
    borderRadius: 20,
    width:370,
    height:300,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalBackground : {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});

export default Diary;
