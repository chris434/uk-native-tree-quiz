import {useState} from 'react'
export function useLocalStorage<T>(key: string,initValue?:T) {
    const [data, setData] = useState<T>(getLocalStorage)
    function getLocalStorage() {
        const jsonData = localStorage.getItem(key)
      
        if (jsonData) {
            const parsedData = JSON.parse(jsonData)
            return parsedData
        }
        return initValue
   
    }
    function setLocalStorage(value: T) {
        localStorage.setItem(key, JSON.stringify(value))
        setData(value)
    }
    const returnData: [T, (value: T)=>void] = [data, setLocalStorage]
    return returnData
}