
type progressBarProps = {
    progress: number
    length:number
}

export function ProgressBar({ progress,length }:progressBarProps) {
    return  <div className='bg-gray-200 rounded-full  text-center relative w-full'>
               <div style={{width:`${progress+1}0%`}} className={`bg-blue-500  rounded-full  text-end p-1`}>
            <div className="z-10 relative text-white mr-5">{progress+1}/{length}</div>
              </div>
           </div>
}