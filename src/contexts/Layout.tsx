'use client'
import { createContext, useState } from 'react'

interface LayoutContextProps {
  currentState: string
  onChangeState: (state: string) => void
}

export const LayoutContext = createContext<LayoutContextProps>({
  currentState: 'home_page',
  onChangeState: () => {},
})

interface LayoutProviderProps {
  children: React.ReactNode
}

export const LayoutContextProvider: React.FC<LayoutProviderProps> = ({ children}) => {
  const [currentState, setCurrentState] = useState('home_page')

  const onChangeState = (state: string) => {
    setCurrentState(state)
  }

  return <LayoutContext.Provider value={{ currentState, onChangeState }}>
    <div className='flex w-full h-full'>
      
      {children}
    </div>
  </LayoutContext.Provider>
}
