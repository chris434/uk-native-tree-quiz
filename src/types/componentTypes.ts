import { ReactNode,ChangeEvent } from 'react'

export type childrenProps = { children: ReactNode }

export type customChangeEvent<T>= ChangeEvent<HTMLSelectElement &{id: T}>