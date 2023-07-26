import {useEffect,useState} from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'

type circularProgressbar = {
    value: number
}

export function Spinner({value}:circularProgressbar) {
    const [currentPercentage, setCurrentPercentage] = useState(0)
    console.log(value)
    useEffect(() => {
        let count=0
      const interval=  setInterval(() => {
            if (value!==count) {
                count++
                setCurrentPercentage((currentPercentage) => currentPercentage += 1)
            }
      }, 15)
       return ()=> clearInterval(interval)
    }, [value])
    console.log(currentPercentage)
    return <div className="mt-10 m-5 flex justify-center">
<CircularProgressbarWithChildren  value={currentPercentage}  styles={buildStyles({pathColor:'blue',pathTransitionDuration:0.1})}>
            <strong className='text-4xl'>{currentPercentage}%</strong>
</CircularProgressbarWithChildren>
        </div>;
}