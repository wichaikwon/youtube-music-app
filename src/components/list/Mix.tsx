import { items2 } from '@/constants/data'
import { RouterContext } from '@/contexts/Router'
import usePagination from '@/hooks/Paginations'
import Image from 'next/image'
import { Fragment, useContext } from 'react'

interface MixProps {
  mood?: string
}
const Mix: React.FC<MixProps> = ({ mood = '' }) => {
  const router = useContext(RouterContext)
  const itemsPerPage = 5
  const filteredItems = items2?.filter((i) => (mood ? i.moods?.includes(mood) : i))
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination(filteredItems, itemsPerPage)
  return (
    <Fragment>
      <div className="pt-8">
        <div className="flex items-center justify-between">
          <span className="text-5xl font-bold">มิกซ์สำหรับคุณ</span>
          <div className="flex gap-4">
            <button
              onClick={() => router.push('/mixed_for_you')}
              className="rounded-full border border-gray-700 px-4 hover:bg-white hover:bg-opacity-25">
              <span className="text-sm">ดูทั้งหมด</span>
            </button>
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={currentPage === 0 ? 'pointer-events-none opacity-50' : ''}>
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
              className={currentPage === totalPages - 1 ? 'pointer-events-none opacity-50' : ''}>
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
          <div className="scroll-container flex shrink-0 gap-5 overflow-y-auto pb-5 pt-4">
            {paginatedData.map((item, idx) => (
              <div key={idx} className="flex shrink-0 flex-col">
                <button className="group relative">
                  <Image
                    src={`/mix/${item.id}.jpg`}
                    className="rounded-md group-hover:opacity-90"
                    alt={`${item.id}`}
                    width={280}
                    height={280}
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
    </Fragment>
  )
}
export default Mix
