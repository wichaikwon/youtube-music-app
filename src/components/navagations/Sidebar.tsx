import { Fragment, useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import YtmusicSvg from '../../../public/svg/YtmusicSvg'
import { LayoutContext } from '@/contexts/Layout'
import Image from 'next/image'
import { RouterContext } from '@/contexts/Router'

const Sidebar = () => {
  const { isMenuOpen, openMenu, closeMenu } = useContext(LayoutContext)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useContext(RouterContext)

  const toggleMenu = () => {
    if (isMenuOpen) {
      closeMenu()
    } else {
      openMenu()
    }
  }

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
    <Fragment>
      <div
        className={cn('sticky top-0 z-30 flex h-screen flex-col bg-black p-4', isMenuOpen ? 'bg-transparent' : 'w-60')}>
        <div className={cn('flex items-start gap-4 px-1')}>
          <button onClick={toggleMenu} className="h-6 w-6">
            <Image src="/svg/menu.svg" width={24} height={24} alt="menu-sidebar" />
          </button>
          <button onClick={() => router.push('/')} className="h-6 w-20">
            <Image src="/svg/youtubemusic.svg" alt="youtube" width={80} height={24} />
          </button>
        </div>

        <div className={cn('flex items-center gap-5 pt-8')}>
          {isMenuOpen && (
            <div className="flex flex-col items-center justify-center gap-5 py-2">
              <button onClick={() => router.push('/')} className="flex flex-col items-center gap-1">
                <Image src="/svg/home.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">หน้าแรก</span>
              </button>
              <button onClick={() => router.push('/explore')} className="flex flex-col items-center gap-1">
                <Image src="/svg/explore.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">สำรวจ</span>
              </button>
              <button onClick={() => router.push('/library')} className="flex flex-col items-center gap-1">
                <Image src="/svg/music.svg" alt="home-sidebar" width={24} height={24} />
                <span className="text-xxs">คลังเพลง</span>
              </button>
            </div>
          )}

          {!isMenuOpen && (
            <div className="flex flex-col gap-2">
              <button onClick={() => router.push('/')} className="flex items-center gap-5 p-1">
                <Image src="/svg/home.svg" alt="home-sidebar" width={24} height={24} />
                <span>หน้าแรก</span>
              </button>
              <button onClick={() => router.push('/explore')} className="flex items-center gap-5 p-1">
                <Image src="/svg/explore.svg" alt="home-sidebar" width={24} height={24} />
                <span>สำรวจ</span>
              </button>
              <button onClick={() => router.push('/library')} className="flex items-center gap-5 p-1">
                <Image src="/svg/music.svg" alt="home-sidebar" width={24} height={24} />
                <span>คลังเพลง</span>
              </button>
            </div>
          )}
        </div>

        {!isMenuOpen && (
          <div className={cn('my-6 h-0.5 opacity-25', isMenuOpen ? '-translate-x-40' : 'opacity-25')} />
        )}

        {!isMenuOpen && (
          <>
            <button className="mb-4 flex items-center justify-center gap-2 rounded-full bg-gray-800 p-1 text-sm ">
              <Image src="/svg/plus.svg" alt="home-sidebar" width={24} height={24} />
              <span>เพลลิสต์ใหม่</span>
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 hover:bg-gray-800">
              <span className="text-sm">เพลงที่ชอบ</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Image src="/svg/pin.svg" alt="home-sidebar" width={12} height={12} />
                เพลลิสต์อัตโนมัติ
              </span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                <Image src="/svg/playcircle.svg" alt="home-sidebar" width={24} height={24} />
              </div>
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 hover:bg-gray-800">
              <span className="text-sm">ตอนสำหรับฟังภายหลัง</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">เพลลิสต์อัตโนมัติ</span>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100">
                <Image src="/svg/playcircle.svg" alt="home-sidebar" width={24} height={24} />
              </div>
            </button>
          </>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar
