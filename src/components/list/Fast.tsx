import { items3 } from '@/constants/data'
import usePagination from '@/hooks/Paginations'
import Image from 'next/image'
import { Fragment } from 'react'
interface FastProps {
  mood?: string
}

const Fast: React.FC<FastProps> = ({ mood }) => {
  const itemsPerPage = 12
  const filteredItems = items3?.filter((i) => (mood ? i.moods?.includes(mood) : i))
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination(filteredItems, itemsPerPage)
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <span className="text-5xl font-bold">เลือกอย่างรวดเร็ว</span>
        <div className="flex gap-4">
          <button className="rounded-full border border-gray-700 px-4 hover:bg-white hover:bg-opacity-25">
            <span className="text-sm">เพิ่มเติม</span>
          </button>
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            className={currentPage === totalPages - 1 ? '' : 'pointer-events-none opacity-50'}>
            <Image
              src="/svg/less.svg"
              alt="less"
              width={32}
              height={32}
              className="rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
            />
          </button>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages - 1}
            className={currentPage === 0 ? 'hover:opacity-50' : 'pointer-events-none opacity-50 hover:opacity-75'}>
            <Image
              src="/svg/greater.svg"
              alt="greater"
              width={32}
              height={32}
              className="rounded-full border border-slate-600 p-2 hover:bg-white hover:bg-opacity-20"
            />
          </button>
        </div>
      </div>
      <div className="pb-16 pt-4">
        <div className="scroll-container flex shrink-0 gap-5 overflow-y-auto overflow-x-scroll pb-5 pt-4">
          <div className="scroll-container grid w-full grid-flow-col grid-rows-4 overflow-y-hidden">
            {paginatedData.map((item, idx) => (
              <div key={idx} className="group relative flex w-full shrink-0 items-center gap-2">
                <button className="group relative">
                  <Image
                    src={`/fast/${item.id}.jpg`}
                    alt={`${item.id}`}
                    width={32}
                    height={32}
                    className="rounded-md group-hover:opacity-5"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100">
                    <Image src="/svg/play.svg" width={20} height={20} alt={`play${item.id}`} />
                  </div>
                </button>
                <div className="group relative flex flex-col">
                  <button className="text-left hover:underline">{item.title}</button>
                  <div className="flex items-center text-gray-400">
                    <button className="text-left text-sm">
                      {item.artists.map((artists, idx) => (
                        <span key={idx}>
                          <span className="hover:underline">{artists}</span>
                          {idx < item.artists.length - 2 && <span>, </span>}
                          {idx === item.artists.length - 2 && <span> และ </span>}
                        </span>
                      ))}
                      {/* <button className="text-left text-sm">{item.artists.join(' และ ')}</button> */}
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
                <div className="absolute right-10 top-1/2 flex -translate-y-1/2 gap-2 bg-opacity-0 opacity-0 hover:bg-opacity-100 group-hover:opacity-100">
                  <Image src="/svg/dislike.svg" alt={`dislike/${item.id}`} width={20} height={20} />
                  <Image src="/svg/like.svg" alt={`like${item.id}`} width={20} height={20} />
                  <Image src="/svg/dots.svg" alt={`dots${item.id}`} width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Fast
