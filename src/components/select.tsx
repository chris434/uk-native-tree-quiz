import { customChangeEvent } from "../types/componentTypes"

type selectProps<T> = {
    id: string
    label: string
    data: string[]
    onchange:(value:customChangeEvent<T>)=>void
}

export function Select<T>({ data,onchange,label,id }:selectProps<T>) {
    return <div className="flex gap-3 flex-col sm:flex-row items-start">
        <label className="text-xl" htmlFor={id}>{label}</label>
        <select className="text-2xl  border-green-500 border-b-4 outline-none" id={id} onChange={(e:customChangeEvent<T>)=>onchange(e)}>
        {data.map(item => {
            return <option value={item}>{item}</option>
        })}
    </select>
    </div> 
}