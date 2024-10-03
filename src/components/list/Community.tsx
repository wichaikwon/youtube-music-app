import { items } from '@/constants/data'
import usePagination from '@/hooks/Paginations'
import Image from 'next/image'
import { Fragment } from 'react'

interface CommunityProps {
  mood?: string
}

const Community: React.FC<CommunityProps> = ({ mood = '' }) => {
  const itemsPerPage = 5
  const filteredItems = items?.filter((i) => (mood ? i.moods?.includes(mood) : i))
  const { currentPage, totalPages, paginatedData, nextPage, prevPage } = usePagination(filteredItems, itemsPerPage)
  return (
    <Fragment>
      <div className="pt-8">
        <div className="flex items-center justify-between pb-4">
          <span className="text-5xl font-bold">จากชุมชน</span>
          <div className="flex gap-4">
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
          <div className="flex gap-4">
            {paginatedData.map((item, idx) => (
              <div key={idx} className="flex shrink-0 flex-col">
                <button className="group relative">
                  <Image
                    src={`/community/${item.id}.jpg`}
                    className="rounded-lg opacity-95 group-hover:opacity-60"
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
    </Fragment>
  )
}
export default Community
