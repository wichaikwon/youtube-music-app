'use client'
import { Fragment, useContext, useState } from 'react'
import cn from 'classnames'
import { LayoutContext } from '@/contexts/Layout'
import HomePage from '@/components/partials/HomePage'
import moods from '@/constants/moods'

const Type: React.FC = () => {
  const [isType, setIsType] = useState('')
  const { onChangeState } = useContext(LayoutContext)

  return (
    <Fragment>
      <div className="flex w-full flex-col px-24 py-24">
        <div className="flex gap-2 pb-12 pt-12">
          {Object.entries(moods).map(([key, value]) => (
            <button
              key={key}
              className={cn(
                'rounded-md bg-white bg-opacity-10 px-3 py-1',
                isType === key ? 'bg-white bg-opacity-100 text-black' : 'hover:bg-opacity-25'
              )}
              onClick={() => {
                setIsType(key)
                onChangeState(key)
              }}>
              <span className="text-sm">{value}</span>
            </button>
          ))}
        </div>

        <HomePage mood={isType} />
      </div>
    </Fragment>
  )
}
export default Type
