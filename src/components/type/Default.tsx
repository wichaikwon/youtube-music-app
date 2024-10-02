import {  useRef, useState } from 'react'
import Image from 'next/image'

type VDO = {
  id: number
  title: string
  artist: string[]
  views: number
}

type MIX = {
  id: number
  title: string
  views: number
}

type QUICK = {
  id: number
  title: string
  artist: string[]
  views: number
}

const items: VDO[] = [
  { id: 1, title: 'ลอเร็ม อิปซัม', artist: ['ศิลปิน A', 'ศิลปินนะ'], views: 12345678 },
  { id: 2, title: 'ดอลอร์ ซิท อาเมท', artist: ['ศิลปิน B'], views: 23456789 },
  { id: 3, title: 'คอนเซคเททัวร์', artist: ['ศิลปิน C'], views: 34567890 },
  { id: 4, title: 'อะดิพิสซิ่ง เอลิท', artist: ['ศิลปิน D'], views: 45678901 },
  { id: 5, title: 'เซด โด อีอุสโมด', artist: ['ศิลปิน E'], views: 56789012 },
  { id: 6, title: 'เทมพอร์ อินซิเดนท์', artist: ['ศิลปิน F'], views: 67890123 },
  { id: 7, title: 'อุต ลาโบเร', artist: ['ศิลปิน G'], views: 78901234 },
  { id: 8, title: 'เอ็ท โดโลเร แมกนา', artist: ['ศิลปิน H'], views: 89012345 },
  { id: 9, title: 'อาลิกัวม', artist: ['ศิลปิน I'], views: 90123456 },
  { id: 10, title: 'ยูท เอนิม แอด', artist: ['ศิลปิน J'], views: 101234567 },
]

const items2: MIX[] = [
  { id: 1, title: 'มิกซ์ของฉัน', views: 12345678 },
  { id: 2, title: 'มิกซ์ของฉัน', views: 23456789 },
  { id: 3, title: 'มิกซ์ของฉัน', views: 34567890 },
  { id: 4, title: 'มิกซ์ของฉัน', views: 45678901 },
  { id: 5, title: 'มิกซ์ของฉัน', views: 56789012 },
  { id: 6, title: 'มิกซ์ของฉัน', views: 67890123 },
  { id: 7, title: 'มิกซ์ของฉัน', views: 78901234 },
  { id: 8, title: 'มิกซ์ของฉัน', views: 89012345 },
  { id: 9, title: 'มิกซ์ของฉัน', views: 90123456 },
  { id: 10, title: 'มิกซ์ของฉัน', views: 101234567 },
]

const items3: QUICK[] = [
  { id: 1, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 12345678 },
  { id: 2, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์'], views: 23456789 },
  { id: 3, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 34567890 },
  { id: 4, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 45678901 },
  { id: 5, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 56789012 },
  { id: 6, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 67890123 },
  { id: 7, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 78901234 },
  { id: 8, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 89012345 },
  { id: 9, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 90123456 },
  { id: 10, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 101234567 },
  { id: 11, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 12345678 },
  { id: 12, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 23456789 },
  { id: 13, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 34567890 },
  { id: 14, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 45678901 },
  { id: 15, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 56789012 },
  { id: 16, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 67890123 },
  { id: 17, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 90123456 },
  { id: 18, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 101234567 },
  { id: 19, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 12345678 },
  { id: 20, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 23456789 },
  { id: 21, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 34567890 },
  { id: 22, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 45678901 },
  { id: 23, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 56789012 },
  { id: 24, title: 'สาริกาลิ้นทอง (Smooth-talker)', artist: ['เปเปอร์ เพลนส์', 'โจอี้ ภูวศิษฐ์'], views: 67890123 },
]

const Default = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  /**
   * @todo Implement scroll detection to enable/disable the scroll buttons based on the scroll position.
   */
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const [currentMixPage, setCurrentMixPage] = useState(0)
  const [currentGridPage, setCurrentGridPage] = useState(0)
  const [currentCommuPage, setCurrentCommuPage] = useState(0)

  const totalMixPages = Math.ceil(items2.length / 5)
  const currentMixItems = items2.slice(currentMixPage * 5, (currentMixPage + 1) * 5)

  const totalGridPages = Math.ceil(items3.length / 12)
  const currentGridItems = items3.slice(currentGridPage * 12, (currentGridPage + 1) * 12)

  const totalCommuPages = Math.ceil(items2.length / 5)
  const currentCommuItems = items2.slice(currentCommuPage * 5, (currentCommuPage + 1) * 5)

  /**
   * Advances to the next page if the current page is less than the total number of pages.
   *
   * @param currentPage - The current page number.
   * @param totalPages - The total number of pages.
   * @param setPage - A state setter function to update the current page.
   */
  const nextPage = (currentPage: number, totalPages: number, setPage: React.Dispatch<React.SetStateAction<number>>) => {
    if (currentPage < totalPages - 1) {
      setPage(currentPage + 1)
    }
  }

  /**
   * Decrements the current page number by one if it is greater than zero.
   *
   * @param currentPage - The current page number.
   * @param setPage - The state setter function to update the page number.
   */
  const prevPage = (currentPage: number, setPage: React.Dispatch<React.SetStateAction<number>>) => {
    if (currentPage > 0) {
      setPage(currentPage - 1)
    }
  }

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
    <div className="flex flex-col px-24">
      <div className="pb-16 pt-12">
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
        <div ref={scrollContainerRef} className="flex gap-5 overflow-hidden">
          {items.map((item, idx) => (
            <div className="group flex h-full shrink-0 flex-col" key={idx} id={`fav-${item}`}>
              <button className="relative">
                <Image
                  src={`/fav/${item.id}.jpg`}
                  alt={`${item}`}
                  className="h-full w-fit rounded-lg group-hover:opacity-50"
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
                  <button className="text-left text-sm">{item.artist.join(' และ ')}</button>
                  <span className="text-sm">
                    {`การดู ${new Intl.NumberFormat('th-TH', {
                      notation: 'compact',
                      compactDisplay: 'short',
                    }).format(item.views)} ครั้ง`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-bold">มิกซ์สำหรับคุณ</span>
          <div className="flex gap-4">
            <button
              onClick={() => prevPage(currentMixPage, setCurrentMixPage)}
              disabled={currentMixPage === 0}
              className={currentMixPage === totalMixPages - 1 ? '' : 'pointer-events-none opacity-50'}>
              <Image
                src="/svg/less.svg"
                alt="less"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
            <button
              onClick={() => nextPage(currentMixPage, totalMixPages, setCurrentMixPage)}
              disabled={currentMixPage === totalMixPages - 1}
              className={currentMixPage === 0 ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'}>
              <Image
                src="/svg/greater.svg"
                alt="greater"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
          </div>
        </div>

        <div className="pb-16 pt-4">
          <div className="scroll-container flex shrink-0 gap-5 overflow-y-auto overflow-x-scroll pb-5 pt-4">
            {currentMixItems.map((item, idx) => (
              <div key={idx} className="flex shrink-0 flex-col">
                <button className="group relative">
                  <Image
                    src={`/mix/${item.id}.jpg`}
                    className="group-hover:opacity-90"
                    alt={`${item.id}`}
                    width={284}
                    height={284}
                  />
                  <div className="absolute bottom-4 right-4 flex rounded-full bg-black bg-opacity-50 opacity-0 transition hover:scale-150 hover:bg-opacity-100 group-hover:opacity-100">
                    <Image src={`/svg/play.svg`} alt={`${item.id}`} width={32} height={32} />
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100">
                    <Image src="/svg/dots.svg" width={20} height={20} alt="dots" />
                  </div>
                </button>
                <div className="flex flex-col pt-2">
                  <span className="text-md">มิกซ์ของฉัน {item.id}</span>
                  <div className="flex text-gray-400">
                    <span>
                      <span className="text-md">
                        การดู{' '}
                        {new Intl.NumberFormat('th-TH', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(item.views)}{' '}
                        ครั้ง
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-bold">เลือกอย่างรวดเร็ว</span>
          <div className="flex gap-4">
            <button className="rounded-full border border-gray-700 px-4 hover:bg-white hover:bg-opacity-25">
              <span className="text-sm">เพิ่มเติม</span>
            </button>
            <button
              onClick={() => prevPage(currentGridPage, setCurrentGridPage)}
              disabled={currentGridPage === 0}
              className={currentGridPage === totalGridPages - 1 ? '' : 'pointer-events-none opacity-50'}>
              <Image
                src="/svg/less.svg"
                alt="less"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
            <button
              onClick={() => nextPage(currentGridPage, totalGridPages, setCurrentGridPage)}
              disabled={currentGridPage === totalGridPages - 1}
              className={
                currentGridPage === 0 ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'
              }>
              <Image
                src="/svg/greater.svg"
                alt="greater"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
          </div>
        </div>
        <div className="pb-16 pt-4">
          <div className="scroll-container flex shrink-0 gap-5 overflow-y-auto overflow-x-scroll pb-5 pt-4">
            <div className="grid w-full grid-flow-col grid-rows-4">
              {currentGridItems.map((item, idx) => (
                <div key={idx} className="group relative flex w-full shrink-0 items-center gap-2">
                  <button className="group relative">
                    <Image
                      src={`/fast/${item.id}.jpg`}
                      alt={`${item.id}`}
                      width={64}
                      height={100}
                      className="h-fit group-hover:opacity-5"
                    />
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                      <Image src="/svg/play.svg" width={20} height={20} alt={`play${item.id}`} />
                    </div>
                  </button>
                  <div className="group relative flex flex-col">
                    <button className="text-left hover:underline">{item.title}</button>
                    <div className="flex items-center text-gray-400">
                      <button className="text-left text-sm">
                        {item.artist.map((artist, idx) => (
                          <span key={idx}>
                            <span className="hover:underline">{artist}</span>
                            {idx < item.artist.length - 2 && <span>, </span>}
                            {idx === item.artist.length - 2 && <span> และ </span>}
                          </span>
                        ))}
                        {/* <button className="text-left text-sm">{item.artist.join(' และ ')}</button> */}
                      </button>
                      <Image src="/svg/dot.svg" alt={`dot${item.id}`} width={16} height={16} />
                      <span className="text-sm">
                        การดู{' '}
                        {new Intl.NumberFormat('th-TH', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(item.views)}{' '}
                        ครั้ง
                      </span>
                    </div>
                  </div>
                  <div className="absolute right-10 top-1/2 flex -translate-y-1/2 gap-2 bg-black bg-opacity-0 opacity-0 hover:bg-opacity-100 group-hover:opacity-100">
                    <Image src="/svg/dislike.svg" alt={`dislike/${item.id}`} width={20} height={20} />
                    <Image src="/svg/like.svg" alt={`like${item.id}`} width={20} height={20} />
                    <Image src="/svg/dots.svg" alt={`dots${item.id}`} width={20} height={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="flex items-center justify-between pb-4">
          <span className="text-5xl font-bold">จากชุมชน</span>
          <div className="flex gap-4">
            <button
              onClick={() => prevPage(currentCommuPage, setCurrentCommuPage)}
              disabled={currentCommuPage === 0}
              className={currentCommuPage === totalCommuPages - 1 ? '' : 'pointer-events-none opacity-50'}>
              <Image
                src="/svg/less.svg"
                alt="less"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
            <button
              onClick={() => nextPage(currentCommuPage, totalCommuPages, setCurrentCommuPage)}
              disabled={currentCommuPage === totalCommuPages - 1}
              className={
                currentCommuPage === 0 ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'
              }>
              <Image
                src="/svg/greater.svg"
                alt="greater"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
              />
            </button>
          </div>
        </div>
        <div className="pb-16 pt-4">
          <div
            className="flex gap-4"
            // className="scroll-container flex shrink-0 gap-5 overflow-y-auto overflow-x-scroll pb-5 pt-4"
          >
            {currentCommuItems.map((item, idx) => (
              <div key={idx} className="flex shrink-0 flex-col">
                <button className="group relative">
                  <Image
                    src={`/community/${item.id}.jpg`}
                    className="opacity-95 group-hover:opacity-60"
                    alt={`${item.id}`}
                    width={284}
                    height={284}
                  />
                  <div className="absolute bottom-2 left-2 rounded-full border-2">
                    <Image
                      src={`/community/thumbnail/${item.id}.jpg`}
                      alt={`thumbnail${item.id}`}
                      className="rounded-full"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 flex rounded-full bg-black bg-opacity-50 opacity-0 transition hover:scale-150 hover:bg-opacity-100 group-hover:opacity-100">
                    <Image src={`/svg/play.svg`} alt={`${item.id}`} width={32} height={32} />
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100">
                    <Image src="/svg/dots.svg" width={20} height={20} alt="dots" />
                  </div>
                </button>
                <div className="flex flex-col pt-2">
                  <span className="text-md">มิกซ์ของฉัน {item.id}</span>
                  <div className="flex text-gray-400">
                    <span>
                      <span className="text-md">
                        การดู{' '}
                        {new Intl.NumberFormat('th-TH', {
                          notation: 'compact',
                          compactDisplay: 'short',
                        }).format(item.views)}{' '}
                        ครั้ง
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Default
