import { Fragment, useContext } from 'react'
import MenuSvg from '../svg/MenuSvg'
import cn from 'classnames'
import YtmusicSvg from '../svg/YtmusicSvg'
import HomeSvg from '../svg/HomeSvg'
import { LayoutContext } from '@/contexts/Layout'
import { ExploreSvg } from '../svg/ExploreSvg'
import { MusicSvg } from '../svg/MusicSvg'
import { PlusSvg } from '../svg/PlusSvg'
import { PinSvg } from '../svg/PinSvg'
import { PlaySvg } from '../svg/PlaySvg'

const Sidebar = () => {
  const { isMenuOpen, openMenu, closeMenu } = useContext(LayoutContext)

  const toggleMenu = () => {
    isMenuOpen ? closeMenu() : openMenu()
  }
  return (
    <Fragment>
      <div className={cn('flex z-40 flex-col bg-black p-4 text-white h-screen sticky top-0', isMenuOpen ? 'bg-transparent' : 'w-60')}>
         <div className={cn('flex items-start gap-4 px-1 ')}>
          <button onClick={toggleMenu}>
            <MenuSvg className="h-6 w-6" />
          </button>
          <button className={cn(isMenuOpen ? '' : 'opacity-100')}>
            <YtmusicSvg />
          </button>
        </div>

        <div className={cn('flex items-center gap-5 pt-8')}>
          {isMenuOpen && (
            <div className="flex flex-col items-center justify-center gap-5 py-2">
              <button className="flex flex-col items-center gap-1">
                <HomeSvg className="h-5 w-5" />
                <span className="text-xxs">หน้าแรก</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <ExploreSvg className="h-6 w-6" />
                <span className="text-xxs">สำรวจ</span>
              </button>
              <button className="flex flex-col items-center gap-1">
                <MusicSvg className="h-6 w-6" />
                <span className="text-xxs">คลังเพลง</span>
              </button>
            </div>
          )}

          {!isMenuOpen && (
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-5 p-1">
                <HomeSvg className="h-6 w-6" />
                <span>หน้าแรก</span>
              </button>
              <button className="flex items-center gap-5 p-1">
                <ExploreSvg className="h-6 w-6" />
                <span>สำรวจ</span>
              </button>
              <button className="flex items-center gap-5 p-1">
                <MusicSvg className="h-6 w-6" />
                <span>คลังเพลง</span>
              </button>
            </div>
          )}
        </div>

        <div className={cn('my-6 h-0.5 bg-white opacity-25', isMenuOpen ? '-translate-x-40' : 'opacity-25')} />

        {!isMenuOpen && (
          <>
            <button className="mb-4 flex items-center justify-center gap-2 rounded-full bg-gray-800 p-1 text-sm text-white">
              <PlusSvg className="h-6 w-6" />
              <span>เพลลิสต์ใหม่</span>
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 hover:bg-gray-800">
              <span className="text-sm">เพลงที่ชอบ</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <PinSvg className="h-3 w-3" />
                เพลลิสต์อัตโนมัติ
              </span>
              <PlaySvg className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
            </button>
            <button className="group relative flex flex-col rounded-lg p-2 hover:bg-gray-800">
              <span className="text-sm">ตอนสำหรับฟังภายหลัง</span>
              <span className="flex items-center gap-1 text-xs text-gray-400">เพลลิสต์อัตโนมัติ</span>
              <PlaySvg className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 transform opacity-0 transition-opacity duration-100 group-hover:opacity-100" />
            </button>
          </>
        )}
      </div>
    </Fragment>
  )
}

export default Sidebar