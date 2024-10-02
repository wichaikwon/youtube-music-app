'use client'
import { Fragment, useContext, useState } from 'react'
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
import Default from '../type/Default'

const Type = () => {
  const [isType, setIsType] = useState('')
  const { onChangeState } = useContext(LayoutContext)

  return (
    <Fragment>
      <div className="flex gap-2 px-24 pb-4 pt-12">
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

      {!isType && <Default />}
      {isType && (
        <div className='pl-24'>
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
