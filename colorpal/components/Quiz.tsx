import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import data from "../data/QuizData";

type Question = {
  question: string;
  options: string[];
}

function Quiz() {
  const allQuestions: Question[] = data;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false)
  const [showResultModal, setShowResultModal] = useState(false)

  const saveAnswer = (option: string) => {
    if (option) {
      // TODO: save selection option (only one) to array ... 
      setShowNextButton(true)
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
    if (currentQuestionIndex == allQuestions.length-1) {
      // Last Question
      // TODO: Show result modal
      setShowResultModal(true)
    } else {
      setCurrentQuestionIndex(currentQuestionIndex+1);
      setCurrentOptionSelected(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
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
          fontSize: 30
        }}>{allQuestions[currentQuestionIndex]?.question}</Text>
      </View>
    )
  }

  const renderOptions = () => {
    // TODO: keep selected option opaque
    return (
      <View>
        {
          allQuestions[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity
            onPress={() => saveAnswer(option)}
            disabled={isOptionsDisabled}
            key={option}
            style={{
              borderWidth: 3,
              height: 60, borderRadius: 20,
              flexDirection: 'row',
              alignItems: 'center', justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginVertical: 10
            }}
            >
              <Text style={{fontSize: 20}}>{option}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }

  // TODO: make spacing less awkward
  return (
    <View>
      {renderQuestion()}
      {renderOptions()}
      {renderNextButton()}
    </View>
  );
}

export default Quiz;
