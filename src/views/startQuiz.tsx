import { Button } from '../components/button'
import {setLocalStorage} from '../utils/localStorage'
type startQuizProps = {
    changeGameState: (state:string)=> void
}
export function StartQuiz({changeGameState}:startQuizProps) {
    const backgroundImage = 'https://www.progardentips.com/wp-content/uploads/2021/07/Sherwood-forrest-Nottingham-on-a-sunny-early-autumn-day.jpeg'
    
    function startQuizHandler() {
        changeGameState('playing')

        setLocalStorage('quizData', 'playing')
    }
    return <div style={{backgroundImage:`url(${backgroundImage})`}}  className='bg-cover bg-center background-image: url() flex  items-center h-auto justify-center absolute bottom-0 right-0 top-0 left-0 -z-0'>
<Button onclick={startQuizHandler} size='lg'>Start quiz</Button>
    </div>
}