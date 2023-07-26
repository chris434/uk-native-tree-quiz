import { Header } from '../components/header';
import {childrenProps} from '../types/componentTypes'
export function MainLayout({ children }:childrenProps) {
   return <>
        <Header />
        {children}
    </>
}