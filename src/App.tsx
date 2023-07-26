
import { MainLayout } from './layouts/mainLayout'
import {StartQuiz} from './views/startQuiz'
import {useEffect} from 'react'
import { Quiz } from './views/quiz'
import { ResultBoard } from './views/resultBoard'
import { useLocalStorage } from './hooks/localStorage'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {restQuiz} from './utils/resetQuiz'

function App() {
  const [gameState, setGameState] = useLocalStorage<string>('quizData', 'lobby')
  
   useEffect(() => {
    const gameIsOver = getLocalStorage('gameIsOver')
    if (gameIsOver) {
      setLocalStorage('gameIsOver', false)
      restQuiz()
      setGameState('lobby')
    }
   }, [])
  
  return <main>
    <MainLayout>
      {gameState === 'lobby' ?
        <StartQuiz changeGameState={(gameState) => setGameState(gameState)} />
          : gameState === 'result' ?
            <ResultBoard changeGameState={(gameState) => setGameState(gameState)}/>:
          <Quiz changeGameState={(gameState) => setGameState(gameState)}/>
      }
      
      
    </MainLayout>
  </main>
}

export default App
