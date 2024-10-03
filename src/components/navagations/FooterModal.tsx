import classNames from 'classnames'
import React from 'react'
import FooterModalDetail from '@/app/footer_detail/page'

interface Props {
  changeDropUp: boolean
  setChangeDropUp: (open: boolean) => void
}

const FooterModal: React.FC<Props> = ({ changeDropUp, setChangeDropUp }) => {
  return (
    <div
      className={classNames(
        'fixed bottom-0 z-20 w-full transition-transform duration-500 ease-in-out pb-20',
        changeDropUp ? 'translate-y-0 transform' : 'opacity-0 pointer-events-none translate-y-full transform'
      )}
      onClick={() => setChangeDropUp(false)} // Close modal when clicking on it
    >
      <FooterModalDetail />
    </div>
  )
}
export default FooterModal
