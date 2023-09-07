import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Alert, Pressable } from "react-native";
import data from "../data/QuizData";

type Question = {
  question: string;
  options: { text: string, selected: boolean }[];
}

function Quiz() {
  const allQuestions: Question[] = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)

  const saveAnswer = (optionIndex: number) => {
    if (optionIndex >= 0) {
      // TODO: save selection option (only one) to array ... 
      allQuestions[currentQuestionIndex].options.forEach((option, index) => {
        option.selected = (index === optionIndex);
      });
      setSelectedOptionIndex(optionIndex);
      setShowNextButton(true);
    }
  }

  // TODO: make next button look better
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress = {handleNext}
          style={{
            marginTop: 20, width: '100%', padding: 20, borderRadius: 5
          }}>
            <Text style={{fontSize: 20, textAlign: 'center'}}>Next</Text>
        </TouchableOpacity>
      )
    } else {
      return null;
    }
  }
  
  const handleNext = () => {
    if (selectedOptionIndex !== null) {
      // Last Question
      if (currentQuestionIndex == allQuestions.length-1) {
        setShowResultModal(true)
        renderResultModal();
      } else {
        setCurrentQuestionIndex(currentQuestionIndex+1);
        setSelectedOptionIndex(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
      }
    }
  }

  const renderQuestion = () => {
    return (
      <View>
        {/* Question Counter */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
          <Text style={{fontSize: 20, marginRight: 2}}>{currentQuestionIndex+1}</Text>
          <Text style={{fontSize: 18}}>/ {allQuestions.length}</Text>
        </View>

        {/* Question */}
        <Text style={{
          fontSize: 20
        }}>{allQuestions[currentQuestionIndex]?.question}</Text>
      </View>
    )
  }

  const renderOptions = () => {
    return (
      <View>
        {
          allQuestions[currentQuestionIndex]?.options.map((option, index) => (
            <TouchableOpacity
              onPress={() => saveAnswer(index)}
              disabled={isOptionsDisabled}
              key={option.text}
              style={{
                borderWidth: 3,
                height: 60, borderRadius: 20,
                flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
                paddingHorizontal: 20,
                marginVertical: 10,
                opacity: option.selected ? 1 : 0.5,
                backgroundColor: option.selected ? '#e6e6e6' : 'white',
              }}
            >
              <Text style={{fontSize: 20}}>{option.text}</Text>
              {option.selected && <Text style={{fontSize: 20}}>✓</Text>}
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  const renderResultModal = () => {
    if (showResultModal) {
      return (
        <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showResultModal}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowResultModal(!showResultModal);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Here are your results!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setShowResultModal(!showResultModal)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setShowResultModal(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
      </View>
      )
    }
  }

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });

  return (
    <View style={{ margin: 20}}>
      {renderQuestion()}
      {renderOptions()}
      {renderNextButton()}
      {renderResultModal()}
    </View>
  );
}

export default Quiz;
