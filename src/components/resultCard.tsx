import {AnswerCard} from './answerCard'
import { questionProps } from '../types/quizTypes'


export function ResultCard({ question,questionNumber }: {question: questionProps,questionNumber: number}) {
    console.log(question)
    return <div className="shadow-2xl m-5 p-5 ">
        <div className="text-lg">#{questionNumber }</div>
        <div className="flex justify-center">
<img className="w-[30rem]" src={question.image} />
        </div>
        <div className='flex justify-around gap-5  items-center flex-wrap'>
            <AnswerCard field="genus" fieldData={question.genus} />
            <AnswerCard field="specie" fieldData={question.specie} />
            <AnswerCard field="commonName" fieldData={question.commonName}/>
        </div>
  
    </div>
}