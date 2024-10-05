'use client'
import classNames from 'classnames'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

interface NavbarContextProps {
  isProfileOpen: boolean
  showProfile: () => void
  hideProfile: () => void
}

export const NavbarContext = createContext<NavbarContextProps>({
  isProfileOpen: false,
  showProfile: () => {},
  hideProfile: () => {},
})

interface NavbarProviderProps {
  children: React.ReactNode
}

export const NavbarContextProvider: React.FC<NavbarProviderProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const showProfile = () => setIsProfileOpen(true)
  const hideProfile = () => setIsProfileOpen(false)
  const router = useRouter()
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
    <NavbarContext.Provider value={{ isProfileOpen, showProfile, hideProfile }}>
      <div className="flex w-full flex-col">
        <div
          className={classNames(
            'sticky inset-x-0 top-0 z-10 flex w-full items-center justify-between px-24 py-2 transition-all',
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
            <div className="relative">
              <button
                id="dropdownProfile"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="items-center rounded-lg px-5 py-2.5 text-center"
                type="button">
                <Image src="/profile.jpg" className="rounded-full" width={24} height={24} alt="profile" />
              </button>
              {isProfileOpen && (
                <div id="dropdown" className="absolute right-0 z-10 w-72 rounded-lg bg-gray-700">
                  <ul className="divide-y text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownProfile">
                    <li className="flex w-full justify-around gap-2 p-4">
                      <div className="h-12 w-12">
                        <Image src="/profile.jpg" className="rounded-full" width={40} height={40} alt="profile" />
                      </div>
                      <div className="flex w-full flex-col">
                        <span className="text-base"> Wichai Kwonz (Cl2am3l)</span>
                        <span className="text-base"> @wichaikwonz816</span>
                        <button className="pt-2 text-left text-blue-400">จัดการบัญชี Google</button>
                      </div>
                    </li>
                    <li className="flex h-fit flex-col gap-4 p-4">
                      {['ช่องของคุณ', 'การเป็นสมาชิกแบบชำระเงิน', 'สลับบัญชี', 'ออกจากระบบ'].map((item, idx) => (
                        <button
                          className="flex gap-4"
                          key={idx}
                          onClick={() => {
                            router.push('/mixed_for_you')
                          }}>
                          <Image src="/profile.jpg" className="rounded-full" width={24} height={24} alt="profile" />
                          {idx !== 2 && <span>{item}</span>}
                          {idx === 2 && (
                            <div className="flex w-full items-center justify-between">
                              <span>{item}</span>
                              <Image src="/svg/greater.svg" width={16} height={16} alt="profile-greater" />
                            </div>
                          )}
                        </button>
                      ))}
                    </li>
                    <li className="flex h-fit flex-col gap-4 p-4">
                      {[
                        'อัปโหลดเพลง',
                        'ประวัติการเข้าชม',
                        'การตั้งค่า',
                        'ข้อกำหนดและนโยบายความเป็นส่วนตัว',
                        'ความช่วยเหลือ',
                        'ส่งความคิดเห็น',
                      ].map((item, idx) => (
                        <button
                          className="flex gap-4"
                          key={idx}
                          onClick={() => {
                            router.push('/')
                          }}>
                          <Image src="/profile.jpg" className="rounded-full" width={24} height={24} alt="profile" />
                          <span>{item}</span>
                        </button>
                      ))}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div
          className={classNames('fixed z-20 h-full w-full bg-black', isProfileOpen ? 'bg-opacity-0' : 'hidden')}
          onClick={() => setIsProfileOpen(false)}></div>
        {children}
      </div>
    </NavbarContext.Provider>
  )
}
