export function getLocalStorage<T>(key: string) {
    const jsonData =localStorage.getItem(key)
    if (jsonData) {
        const parsedData:T = JSON.parse(jsonData);
        return parsedData
    } 
    return 
}
export function setLocalStorage<T>(key: string, value: T) {
    localStorage.setItem(key,JSON.stringify(value))
}