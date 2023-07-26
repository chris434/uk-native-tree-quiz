import {useRef,useEffect} from 'react'
import { Spinner } from '../components/spinner'
import {ResultCard} from '../components/resultCard'
import { questionProps, fieldTypes,quizStateProps } from '../types/quizTypes'
import {useLocalStorage}from '../hooks/localStorage'
import { Button } from '../components/button'
import { restQuiz } from '../utils/resetQuiz'
import {setLocalStorage} from '../utils/localStorage'

export function ResultBoard({ changeGameState }: quizStateProps) {
    const [questions] = useLocalStorage<questionProps[]>('questions')
    const score = useRef(getScore(questions))
    
    useEffect(() => {
          setLocalStorage('gameIsOver',true)
    },[])
   
    function getScore(questions:questionProps[]) {
        const score = questions.reduce((accumulator, currentQuestion) => {
        let count = 0
        function isUserInputTrue(field:fieldTypes) {
            const answer = currentQuestion[field].answer
            const userInput = currentQuestion[field].userInput
            if (answer === userInput) return +1
            return 0
        }

        count += isUserInputTrue('genus')
        count += isUserInputTrue('specie')
        count += isUserInputTrue('commonName')
        console.log(count)
        return accumulator + count

    }, 0)
    function getScorePercentage(score: number):number {
        const scoreDivide = score / 30
        const scoreMultiple = scoreDivide * 100
        const lowerScore = Math.floor(scoreMultiple)
        const higherScore = Math.round(scoreMultiple)

        if (lowerScore < scoreMultiple) return lowerScore
        return higherScore
    }
        const scorePercentage = getScorePercentage(score)
      return scorePercentage
    }

    function playAgain() {
        changeGameState('playing')
        setLocalStorage('gameIsOver',false)
        restQuiz()
    }
    
    return<div>
        <Spinner value={score.current} />
        <div>
 {questions.map((question,i) => {
     return <ResultCard question={question } questionNumber={i+1} />
        })}

        </div>
        <div className='shadow-2xl sticky bottom-0 bg-white p-5 flex justify-center'>
            <Button size='lg' onclick={playAgain}>Play again</Button>
       </div>
    </div> 
}