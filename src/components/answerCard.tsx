import {AnswerPill} from './answerPill'
import { fieldTypes } from '../types/quizTypes'
type answerCardProps = {
    field: fieldTypes
    fieldData:{answer:string,userInput:string}
}

export function AnswerCard({ field, fieldData }: answerCardProps) {
    const {answer,userInput}=fieldData
    return<div className='flex flex-col w-fit items-center gap-3 justify-center'>
             <div className='text-2xl text-center'>{field}</div>
         <AnswerPill answerType="you" answerIsTrue={answer === userInput} answer={userInput} />
        <AnswerPill answerType='answer' answerIsTrue={true} answer={answer} />
        </div>
     
    
}