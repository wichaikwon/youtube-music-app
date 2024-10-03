import { items } from '@/constants/data'
import Image from 'next/image'
import { Fragment, useRef, useState } from 'react'
interface FavProps {
  mood?: string
}

const Fav: React.FC<FavProps> = ({ mood = '' }) => {
  const filteredItems = items?.filter((i) => (mood ? i.moods?.includes(mood) : i))
  const scrollContainerRef = useRef<HTMLDivElement>({} as HTMLDivElement)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  /**
   * Scrolls the container by the width of one item in the specified direction.
   *
   * @param direction - The direction to scroll, either 'left' or 'right'.
   */
  const scrollByItemWidth = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (container) {
      const itemWidth = container.firstElementChild?.clientWidth || 0
      const scrollAmount = direction === 'left' ? -itemWidth : itemWidth

      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })

      container.addEventListener('scroll', () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth
        if (container.scrollLeft <= 0) {
          setCanScrollLeft(false)
        } else {
          setCanScrollLeft(true)
        }

        if (container.scrollLeft >= maxScrollLeft) {
          setCanScrollRight(false)
        } else {
          setCanScrollRight(true)
        }
      })
    }
  }
  return (
    <Fragment>
      <div className="pt-8">
        <div className="flex items-center justify-between pb-4">
          <span className="text-5xl font-bold">รายการโปรดที่ถูกลืม</span>
          <div className="flex gap-4">
            <button
              onClick={() => scrollByItemWidth('left')}
              disabled={!canScrollLeft}
              className={canScrollLeft ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'}>
              <Image
                alt="less"
                src="/svg/less.svg"
                width={32}
                height={32}
                className="rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
            <button
              onClick={() => scrollByItemWidth('right')}
              disabled={!canScrollRight}
              className={canScrollRight ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'}>
              <Image
                alt="greater"
                src="/svg/greater.svg"
                width={32}
                height={32}
                className="rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
          </div>
        </div>
        <div ref={scrollContainerRef} className="scroll-container flex shrink-0 gap-4 overflow-y-scroll pb-5">
          {filteredItems.map((item, idx) => (
            <div className="group flex h-full shrink-0 flex-col" key={idx} id={`fav-${item}`}>
              {item.moods?.filter((m) => (mood ? m === mood : m)) && (
                <>
                  <button className="relative">
                    <Image
                      src={`/fav/${item.id}.jpg`}
                      alt={`${item}`}
                      priority
                      width={1000}
                      height={1000}
                      className="h-full w-full rounded-lg object-cover group-hover:opacity-50"
                    />
                    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full transition hover:scale-150">
                      <Image className="m-auto" src="/svg/play.svg" alt="play" width={40} height={40} />
                    </div>
                    <div className="absolute right-4 top-4 z-20 opacity-0 transition-opacity hover:scale-150 group-hover:opacity-100">
                      <Image src="/svg/dots.svg" width={20} height={20} alt="dots" className="m-auto" />
                    </div>
                  </button>
                  <div className="flex flex-col pt-2">
                    <span className="text-md">{item.title}</span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <button className="text-left text-sm">{item.artists.join(' และ ')}</button>
                      <span className="text-sm">
                        {`การดู ${new Intl.NumberFormat('th-TH', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(item.views)} ครั้ง`}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}
export default Fav
