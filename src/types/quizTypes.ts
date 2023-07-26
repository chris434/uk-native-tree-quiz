export type questionProps = {
     genus:{answer:string,userInput:string}
    specie:{answer:string,userInput:string}
    commonName:{answer:string,userInput:string}
    image:string
}
export type quizStateProps = {
        changeGameState: (state:string)=> void
}

export type fieldTypes='genus'|'specie'|'commonName'