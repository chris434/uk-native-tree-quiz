import { useState,useEffect} from 'react'

import { quizData, commonNames, genusNames, speciesNames } from '../data/trees'
import { Button } from '../components/button'
import { Select } from '../components/select'
import { ProgressBar } from '../components/progressBar'
import { useLocalStorage } from '../hooks/localStorage'
import {customChangeEvent} from '../types/componentTypes'

type questionProps = {
     genus:{answer:string,userInput:string}
    specie:{answer:string,userInput:string}
    commonName:{answer:string,userInput:string}
    image:string
}

type optionProps = {
    genus: string[]
    specie: string[]
    commonName: string[]
}
type quizProps = {
        changeGameState: (state:string)=> void
}
type fieldTypes='genus'|'specie'|'commonName'

export function Quiz({ changeGameState }: quizProps) {
    const [gameState, setGameState] = useLocalStorage<string>('quizData', 'lobby')
    const [questionNumber, setQuestionNumber] = useLocalStorage<number>('questionNumber', 0)
    const [questions, setQuestions] = useLocalStorage<questionProps[]>('questions', [])
    const [options, setOptions] = useState<optionProps>({ genus: [], specie: [], commonName: [] })
    console.log(gameState)
    
    useEffect(() => {
        const randomQuestions = randomizedQuiz(quizData)
  
        if (!questions.length) {
            setQuestions(randomQuestions)
        }
        
    }, [])
    
    useEffect(() => {
        const randomGenusNames = randomizedQuiz(genusNames)
        const randomSpeciesNames = randomizedQuiz(speciesNames)
        const randomCommonNames = randomizedQuiz(commonNames)
        setOptions({ genus: randomGenusNames, specie: randomSpeciesNames, commonName: randomCommonNames })
        console.log(87)
    }, [questionNumber])


    function randomizedQuiz<T>(array: T[]) {
        let currentIndex = 9
        const newQuestions = array.slice()
        while (currentIndex != 0) {
            const randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--
            const temporaryValue = newQuestions[currentIndex]
            newQuestions[currentIndex] = newQuestions[randomIndex]
            newQuestions[randomIndex] = temporaryValue;
    
          
        }
        
        return newQuestions
    }
    function changeSelectValue(e: customChangeEvent<fieldTypes>) {
        const { id: field, value } = e.target
        const mappedQuestions = mapQuestions(questionNumber,{field:[field, value]} )
        setQuestions(mappedQuestions)
       
    }

    function mapQuestions(questionNumber: number, propOptions: { field?: [fieldTypes, string], allFelids?: boolean })
 {
        const {field,allFelids} = propOptions
        function setField(field:fieldTypes,question:questionProps):questionProps {
             if (!question[field].userInput && allFelids) {
                const answer=question[field].answer
                return { ...question, [field]: { userInput:options[field][0],answer } }
             }
            return question
        }
        
        const newQuestions = questions.map((question,i) => {
            if (i !== questionNumber) return question

            if (field) {
               const[key, value] =field
                const answer=question[key].answer
                return {...question,[key]:{userInput:value,answer }}
            }


            question = setField('genus', question)
            question = setField('specie', question)
            question = setField('commonName',question)
        
            return question
    })
       return newQuestions
    }

    function changeQuestionNumber() {
        setQuestionNumber(questionNumber + 1)
    
          const mappedQuestions= mapQuestions(questionNumber,{allFelids:true})
        setQuestions(mappedQuestions)
        
        if(questionNumber+1===10) changeGameState('result')
    }

    function restartQuiz() {
        setQuestionNumber(0)
        setQuestions(randomizedQuiz(quizData))
        setGameState('lobby')
    }
 

    
    return <div>
        <div className="flex gap-5 justify-between sm:flex-row flex-col m-5 items-center ">
            <ProgressBar progress={questionNumber} length={10} />
            <Button onclick={restartQuiz}>restart quiz</Button>
        </div>
        
       
        <div className="flex items-center mt-5 flex-col text-2xl gap-5">
            <div>What tree is this?</div>
            {questions.length&&  <img className="w-[30rem]" src={questions[questionNumber].image} />}
           
        </div>
        <div className="flex justify-center ">
   <div className="flex justify-end gap-5 mt-5 flex-col p-5 w-[30rem]">
            <Select<fieldTypes> id="genus" label="Genus" data={options.genus} onchange={changeSelectValue} />
            <Select<fieldTypes> id="specie" label="Specie" data={options.specie} onchange={changeSelectValue} />
            <Select<fieldTypes> id="commonName" label="Common name" data={options.commonName} onchange={changeSelectValue}/>
           </div>
        </div>
     
        <div className="flex justify-end p-5">
           <Button size='lg'  onclick={changeQuestionNumber}>{questionNumber===9?'Finish quiz':'Next tree'}</Button>
        </div>
            
        </div>
}