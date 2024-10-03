'use client'
import Footer from '@/components/navagations/Footer'
import FooterModal from '@/components/navagations/FooterModal'
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
  const [state, setState] = useState('')
  const [changeDropUp, setChangeDropUp] = useState(false)
  const openMenu = () => setIsMenuOpen(true)
  const closeMenu = () => setIsMenuOpen(false)

  const onChangeState = (state: string) => {
    setState(state)
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
      <div className="flex h-full w-full">
        <Sidebar />
        <div className="relative flex w-full flex-col">
          <Navbar />
          <div className="px-24">{children}</div>
          <FooterModal changeDropUp={changeDropUp} setChangeDropUp={setChangeDropUp} />
        </div>
      </div>
      <Footer
        changeDropUp={changeDropUp}
        setChangeDropUp={setChangeDropUp}
        className="sticky bottom-0 z-30 flex h-16 items-center justify-between bg-gray-800 px-4"
      />
    </LayoutContext.Provider>
  )
}
