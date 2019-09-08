const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestion, currentQuestionIndex  //default both values to undefined
const questionElement = document.getElementById('question-contrainer')
const answerButtonsElement = docuemnt.getElementById('answer-buttons')

startButton.addEventListener('click',startGame)

function startGame(){
    startButton.classList.add('hide')   
    shuffledQuestions = questions.sort(() => Math.random() - .5) //takes curreunt arry and sorts in + and negative way. Maths.random shuffles our qs randomly
    currentQuestionIndex = 0 //start on first q on our shuffled array
    questionContainerElement.classList.remove('hide') 
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question

}

function selectAnswer(){

}

const questions = [
    {
      question: 'What is 10 + 10?',
      answers: [
        { text: '20', correct: true },
        { text: '80', correct: false }
      ]
    },
    {
      question: 'What is 25 * 25',
      answers: [
        { text: '90', correct: false },
        { text: '27', correct: false },
        { text: '625', correct: true },
        { text: '89', correct: false }
      ]
    },
    {
      question: '87 + (10*34)',
      answers: [
        { text: '500', correct: false },
        { text: '427', correct: true },
        { text: '150', correct: false },
        { text: '78', correct: false }
      ]
    },
    {
      question: '82 + 18',
      answers: [
        { text: '100', correct: false },
        { text: '8', correct: true },
        { text: '150', correct: false },
        { text: '78', correct: false }
      ]
    }
  ]