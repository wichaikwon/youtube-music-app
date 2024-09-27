import { Fragment, useContext, useEffect, useState } from 'react'
import { SearchSvg } from '../svg/SearchSvg'
import cn from 'classnames'
import { TVSvg } from '../svg/TVSvg'
import Sidebar from './Sidebar'
import MenuSvg from '../svg/MenuSvg'
import YtmusicSvg from '../svg/YtmusicSvg'
import { LayoutContext } from '@/contexts/Layout'

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { isMenuOpen, openMenu, closeMenu } = useContext(LayoutContext)
  const toggleMenu = () => {
    isMenuOpen ? closeMenu() : openMenu()
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
        className={cn(
          'flex items-center justify-between py-2',
          isScrolled ? 'fixed left-0 top-0 z-20 w-full bg-black pr-24 shadow-md' : 'bg-transparent'
        )}>
        <div className="flex items-center justify-between">
          {isScrolled && <div className={cn('flex', isMenuOpen ? 'w-64' : 'pr-77 ')} />}
          <label className="w-120 flex items-center rounded-lg bg-white bg-opacity-20 py-2 px-4 gap-4">
            <SearchSvg className="text-gray-300 h-6 w-6" />
            <input
              placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์"
              className="w-full bg-transparent text-white outline-none"
            />
          </label>
        </div>
        <div className="flex items-center gap-4">
          <TVSvg className="h-6 w-6 text-white" />
          <img alt="profile" src="/profile.jpg" className="h-6 w-6 rounded-full" />
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
