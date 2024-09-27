'use client'
import { Fragment, useContext, useEffect, useRef, useState } from 'react'
import cn from 'classnames'
import moods from '@/constants/type'
import { LayoutContext } from '@/contexts/Layout'
import Relaxed from '../type/Relaxed'
import FeelGood from '../type/FeelGood'
import Sleep from '../type/Sleep'
import Romantic from '../type/Romantic'
import Sad from '../type/Sad'
import Focused from '../type/Focused'
import Party from '../type/Party'
import Travel from '../type/Travel'
import Exercise from '../type/Exercise'
import Energetic from '../type/Energetic'
import { PlayImgSvg } from '../svg/PlayImgSvg'
import { DotSvg } from '../svg/Dot'
import { LessSvg } from '../svg/LessSvg'
import { GreaterSvg } from '../svg/GreaterSvg'
const Type = () => {
  const [isType, setIsType] = useState('')
  const { onChangeState } = useContext(LayoutContext)

  const scrollContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const container = scrollContainerRef.current
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0)
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth)
    }
  }

  // Scroll left by 300 pixels
  const scrollLeft = () => {
    if (scrollContainerRef.current ) {
      scrollContainerRef.current.scrollBy({ left: -500})
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 500})
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll() 
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])
  return (
    <Fragment>
      <div className="flex gap-2 pb-4 pt-12">
        {Object.entries(moods).map(([key, value]) => (
          <button
            key={key}
            className={cn(
              'rounded-md bg-white bg-opacity-10 px-3 py-1',
              isType === key ? 'bg-white bg-opacity-100 text-black' : 'hover:bg-opacity-25'
            )}
            onClick={() => {
              setIsType(key), onChangeState(key)
            }}>
            <span className="text-sm">{value}</span>
          </button>
        ))}
      </div>

      {!isType && (
        <Fragment>
          <div className="pt-12">
            <div className="flex items-center justify-between">
              <span className="text-5xl font-bold">รายการโปรดที่ถูกลืม</span>
              <div className="flex gap-4">
                <button
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={canScrollLeft ? '' : 'pointer-events-none opacity-50 '}>
                  <LessSvg className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20" />
                </button>
                <button
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={canScrollRight ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'}>
                  <GreaterSvg className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20" />
                </button>
              </div>
            </div>
            <div className="pt-8">
              <div
                ref={scrollContainerRef}
                className="scroll-container flex shrink-0 gap-5 overflow-y-auto overflow-x-scroll pb-5">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                  <div className="flex h-full shrink-0 flex-col" key={idx}>
                    <button className="group relative">
                      <img
                        src={`/fav/${item}.jpg`}
                        alt={`${item}`}
                        className="block h-auto w-full rounded-lg group-hover:opacity-50"
                      />
                      <PlayImgSvg className="absolute inset-0 m-auto h-8 w-8" />
                      <DotSvg className="absolute right-4 top-4 h-5 w-5 opacity-0 group-hover:opacity-100" />
                    </button>
                    <div className="flex flex-col pt-2">
                      <span className="text-md">พูดไม่ออก</span>
                      <div className="flex items-center text-gray-400">
                        <button className="text-left">
                          <span className="text-sm">เดอะทอย •</span>
                        </button>
                        <span className="text-sm">&nbsp; การดู 44 ล้าน ครั้ง</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
      {isType && (
        <div>
          {isType === 'relaxed' && <Relaxed />}
          {isType === 'sleep' && <Sleep />}
          {isType === 'romantic' && <Romantic />}
          {isType === 'sad' && <Sad />}
          {isType === 'focused' && <Focused />}
          {isType === 'party' && <Party />}
          {isType === 'travel' && <Travel />}
          {isType === 'exercise' && <Exercise />}
          {isType === 'feel_good' && <FeelGood />}
          {isType === 'energetic' && <Energetic />}
        </div>
      )}
    </Fragment>
  )
}
export default Type
