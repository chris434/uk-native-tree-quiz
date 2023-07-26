import{childrenProps} from '../types/componentTypes'

type buttonProps = {
    size?: 'sm' | 'md' | 'lg'
    onclick:()=>void
}
const BUTTON_SIZES = { sm:'text-xl',md:'text-2xl',lg:'text-3xl'}
export function Button({ children, size,onclick }: childrenProps & buttonProps) {
    const buttonSize = size?BUTTON_SIZES[size]:'sm'
    return <button onClick={onclick} className={`p-2 bg-green-500 border-green-500 border-4 text-white ${buttonSize} rounded-md hover:text-green-500 hover:bg-transparent`}>{children }</button>
}