'use client'
import Navbar from '@/components/navagations/Navbar'
import Sidebar from '@/components/navagations/Sidebar'
import { createContext, useState } from 'react'

interface LayoutContextProps {
  isMenuOpen: boolean
  openMenu: () => void
  closeMenu: () => void
  currentState: string
  onChangeState: (state: string) => void
}

export const LayoutContext = createContext<LayoutContextProps>({
  isMenuOpen: false,
  openMenu: () => {},
  closeMenu: () => {},
  currentState: 'home_page',
  onChangeState: () => {},
})

interface LayoutProviderProps {
  children: React.ReactNode
}

export const LayoutContextProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [state, setState] = useState('home_page')

  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  const onChangeState = (state: string) => {
    setState(state)
  }
  const getType = () => {
    switch (state) {
      case 'relaxed':
        return 'relaxed'
      case 'energetic':
        return 'energetic'
      case 'feel_good':
        return 'feel_good'
      case 'exercise':
        return 'exercise'
      case 'travel':
        return 'travel'
      case 'party':
        return 'party'
      case 'focused':
        return 'focused'
      case 'sad':
        return 'sad'
      case 'romantic':
        return 'romantic'
      case 'sleep':
        return 'sleep'
      default:
        return 'default'
    }
  }
  return (
    <LayoutContext.Provider
      value={{
        isMenuOpen,
        openMenu,
        closeMenu,
        currentState: state,
        onChangeState,
      }}>
      <div className="flex h-full w-full bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="flex flex-grow">
          <Sidebar />
          <div className="flex w-full flex-col px-24">
            <Navbar />
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </LayoutContext.Provider>
  )
}
