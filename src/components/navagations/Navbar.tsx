import { Fragment, useEffect, useState } from 'react'
import cn from 'classnames'
import Image from 'next/image'

const Navbar: React.FC = () => {
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

  return (
    <Fragment>
      <div
        className={cn(
          'sticky inset-x-0 top-0 z-20 flex w-full items-center justify-between px-24 py-2 transition-colors',
          isScrolled ? 'bg-black shadow-md' : 'bg-transparent'
        )}>
        <div className="flex items-center justify-between">
          <label className="flex w-120 items-center gap-4 rounded-lg bg-white bg-opacity-20 px-4 py-2">
            <Image src="/svg/search.svg" width={24} height={24} alt="search-bar" />
            <input
              placeholder="ค้นหาเพลง อัลบั้ม ศิลปิน พอดแคสต์"
              className="w-full bg-transparent  outline-none"
            />
          </label>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/svg/tv.svg" width={24} height={24} alt="tv-boradcast" />
          <Image alt="profile" src="/profile.jpg" className="rounded-full" width={24} height={24} />
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
