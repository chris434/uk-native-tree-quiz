import {setLocalStorage} from './localStorage'

export function restQuiz() {
    setLocalStorage('questions', [])
    setLocalStorage('questionNumber',0)
}