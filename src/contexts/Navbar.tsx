'use client'
import classNames from 'classnames'
import Image from 'next/image'
import { createContext, useEffect, useState } from 'react'

interface NavbarContextProps {
  isNavbarVisible: boolean
  showNavbar: () => void
  hideNavbar: () => void
}

export const NavbarContext = createContext<NavbarContextProps>({
  isNavbarVisible: true,
  showNavbar: () => {},
  hideNavbar: () => {},
})

interface NavbarProviderProps {
  children: React.ReactNode
}

export const NavbarContextProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  const showNavbar = () => setIsNavbarVisible(true)
  const hideNavbar = () => setIsNavbarVisible(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavbarContext.Provider value={{ isNavbarVisible, showNavbar, hideNavbar }}>
      <div className="flex flex-col w-full">
        <div
          className={classNames(
            'sticky inset-x-0 top-0 z-20 flex w-full items-center px-24 justify-between py-2 transition-all',
            isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
          )}>
          <div className="flex items-center gap-4">
            <label className="flex w-96 items-center gap-4 rounded-lg bg-white bg-opacity-20 px-4 py-2">
              <Image src="/svg/search.svg" width={24} height={24} alt="search-bar" />
              <input
                placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์"
                className="w-full bg-transparent text-white placeholder-white outline-none"
              />
            </label>
          </div>

          <div className="flex items-center gap-4">
            <Image src="/svg/tv.svg" width={24} height={24} alt="tv-broadcast" />
            <Image src="/profile.jpg" className="rounded-full" width={24} height={24} alt="profile" />
          </div>
        </div>
        {children}
      </div>
    </NavbarContext.Provider>
  )
}
