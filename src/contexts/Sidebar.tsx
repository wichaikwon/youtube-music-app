'use client'
import Image from 'next/image'
import cn from 'classnames'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface SidebarContextProps {
  isSidebarOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

export const SidebarContext = createContext<SidebarContextProps>({
  isSidebarOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
})

interface SidebarProviderProps {
  children: React.ReactNode
}

export const SidebarContextProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const router = useRouter()
  const openSidebar = () => setIsSidebarOpen(true)
  const closeSidebar = () => setIsSidebarOpen(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
  const toggleMenu = () => {
    if (isSidebarOpen) {
      closeSidebar()
    } else {
      openSidebar()
    }
  }

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      <div
        className={cn('sticky top-0 z-30 flex h-screen flex-col bg-black', isSidebarOpen ? 'bg-transparent' : 'w-60')}>
        <div
          className={cn(
            'flex items-start gap-4 p-4 transition-all',
            isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
          )}>
          <button onClick={toggleMenu} className="h-6 w-6">
            <Image src="/svg/menu.svg" width={24} height={24} alt="menu-sidebar" />
          </button>
          <button onClick={() => router.push('/')} className="h-6 w-20">
            <Image src="/svg/youtubemusic.svg" alt="youtube" width={80} height={24} />
          </button>
        </div>

        <div className={cn('flex items-center gap-5 p-4')}>
          {isSidebarOpen ? (
            <div className="flex flex-col items-center justify-center gap-5">
              <button onClick={() => router.push('/')} className="flex flex-col items-center">
                <Image src="/svg/home.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">หน้าแรก</span>
              </button>
              <button onClick={() => router.push('/explore')} className="flex flex-col items-center">
                <Image src="/svg/explore.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">สำรวจ</span>
              </button>
              <button onClick={() => router.push('/library')} className="flex flex-col items-center">
                <Image src="/svg/music.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">คลังเพลง</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <button onClick={() => router.push('/')} className="flex items-center gap-5">
                <Image src="/svg/home.svg" alt="home-sidebar" width={24} height={24} />
                <span>หน้าแรก</span>
              </button>
              <button onClick={() => router.push('/explore')} className="flex items-center gap-5">
                <Image src="/svg/explore.svg" alt="home-sidebar" width={24} height={24} />
                <span>สำรวจ</span>
              </button>
              <button onClick={() => router.push('/library')} className="flex items-center gap-5">
                <Image src="/svg/music.svg" alt="home-sidebar" width={24} height={24} />
                <span>คลังเพลง</span>
              </button>
            </div>
          )}
        </div>

        {!isSidebarOpen && (
          <div className='px-4'>
            <div className={cn('my-6 h-0.5 bg-white opacity-25', isSidebarOpen ? '-translate-x-40' : 'opacity-25')} />
          </div>
        )}

        {!isSidebarOpen && (
          <>
            <button className="mb-4 mx-4 flex items-center justify-center gap-2 rounded-full bg-gray-800 p-1 text-sm">
              <Image src="/svg/plus.svg" alt="home-sidebar" width={24} height={24} />
              <span>เพลลิสต์ใหม่</span>
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 mx-4 hover:bg-gray-800">
              <span className="text-sm">เพลงที่ชอบ</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Image src="/svg/pin.svg" alt="home-sidebar" width={12} height={12} />
                เพลลิสต์อัตโนมัติ
              </span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                <Image src="/svg/playcircle.svg" alt="home-sidebar" width={24} height={24} />
              </div>
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 mx-4 hover:bg-gray-800">
              <span className="text-sm">ตอนสำหรับฟังภายหลัง</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">เพลลิสต์อัตโนมัติ</span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                <Image src="/svg/playcircle.svg" alt="home-sidebar" width={24} height={24} />
              </div>
            </button>
          </>
        )}
      </div>

      {children}
    </SidebarContext.Provider>
  )
}
