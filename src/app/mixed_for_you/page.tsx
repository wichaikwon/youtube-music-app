import { Fragment } from 'react'
import { items2 } from '@/constants/data'
import Image from 'next/image'

const MixForYou = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-10 gap-4">
        {items2.map((item, idx) => (
          <div key={idx} className="">
            <button className="group relative">
              <Image
                src={`/mix/${item.id}.jpg`}
                className="rounded-md group-hover:opacity-90"
                alt={`${item.id}`}
                width={150}
                height={150}
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
    </Fragment>
  )
}
export default MixForYou
