import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCheck,faX } from '@fortawesome/free-solid-svg-icons'


type answerPillProps = {
    answerType: 'you' | 'answer'
    answerIsTrue: boolean
    answer:string
}

export function AnswerPill({ answerType, answerIsTrue, answer }:answerPillProps ) {
    return <div className='flex items-center gap-2 flex-col'>

        <div>{answerType}:</div>
        <div className={`${answerIsTrue ? 'bg-green-300 text-green-800' : 'bg-red-300 text-red-500'} w-fit p-3 rounded-full flex gap-3 items-center`}>
            <FontAwesomeIcon icon={answerIsTrue?faCheck:faX}/>
           <div >{answer}</div>  
        </div>
       </div>
}