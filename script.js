const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex // so text can be defined

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5) //is able to shuffle the q's 
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState() //resets questions to default state
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => { //create a loop to go through all the questions answers to enable to answers in the answer box
    const button = document.createElement('button') //single answer for each of the questions and create a button
    button.innerText = answer.text //set inner.text so it is = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct //dataset adds data attribute 
    }
    button.addEventListener('click', selectAnswer) //select answer as adventlistener
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
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
        { text: '100', correct: true },
        { text: '8', correct: false },
        { text: '150', correct: false },
        { text: '78', correct: false }
      ]
    }
  ]