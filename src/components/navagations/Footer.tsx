import cn from 'classnames'
import Image from 'next/image'
import React, { Fragment, useEffect, useRef, useState } from 'react'
interface FooterProps {
  className?: string
  initialVolume?: number
  changeDropUp: boolean // Include this prop
  setChangeDropUp: (open: boolean) => void
}

const Footer: React.FC<FooterProps> = ({ className = '', initialVolume = 100, changeDropUp, setChangeDropUp }) => {
  const [volume, setVolume] = useState<number>(initialVolume)
  const audioRef = useRef<HTMLAudioElement>({} as HTMLAudioElement)
  const [changeVolume, setChangeVolume] = useState(true)
  const [changeRepeat, setChangeRepeat] = useState(1)
  const [changeShuffle, setChangeShuffle] = useState(true)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
  }
  return (
    <Fragment>
      <div className={className}>
        <div className="flex gap-4">
          <Image src="/svg/playprevious.svg" alt="footer-previous-play" width={24} height={24} />
          <Image src="/svg/play.svg" alt="footer-play" width={48} height={48} />
          <Image src="/svg/playnext.svg" alt="footer-next-play" width={24} height={24} />
        </div>
        <div className="flex items-center gap-4">
          <Image src="/fast/1.jpg" alt="footer-fast-1" width={48} height={48} />
          <div className="flex flex-col gap-2 text-sm">
            <span>span </span>
            <div className="flex">
              <button>button</button>
              <Image src="/svg/dot.svg" alt="footer-dot" width={24} height={24} />
              <button>button</button>
              <Image src="/svg/dot.svg" alt="footer-dot" width={24} height={24} />
              <span>span </span>
            </div>
          </div>
          <div className="flex gap-4">
            <Image src="/svg/dislike.svg" alt="footer-dislike" width={24} height={24} />
            <Image src="/svg/like.svg" alt="footer-like" width={24} height={24} />
            <Image src="/svg/dots.svg" alt="footer-dots" width={24} height={24} />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="group flex items-center gap-4">
            <input
              type="range"
              value={volume}
              onChange={handleVolumeChange}
              aria-label="Volume Slider"
              className="h-1 w-20 bg-gray-500 accent-white opacity-0 outline-none transition-opacity duration-200 group-hover:opacity-100"
            />
            {volume ? (
              <button
                onClick={() => {
                  setChangeVolume(!changeVolume), setVolume(0)
                }}
                className={volume > 0 ? 'opacity-100' : 'opacity-0'}>
                <Image
                  src={'/svg/speaker.svg'}
                  style={{ filter: 'invert(60%)' }}
                  alt="footer-speaker"
                  width={24}
                  height={24}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setChangeVolume(!changeVolume), setVolume(100)
                }}
                className={volume === 0 ? 'opacity-100' : 'opacity-0'}>
                <Image
                  src={'/svg/speakeroff.svg'}
                  style={{ filter: 'invert(60%)' }}
                  alt="footer-speakeroff"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </div>
          {changeRepeat === 1 ? (
            <button onClick={() => setChangeRepeat(2)}>
              <Image
                src={'/svg/repeat.svg'}
                style={{ filter: 'invert(60%)' }}
                alt="footer-repeat"
                width={24}
                height={24}
              />
            </button>
          ) : changeRepeat === 2 ? (
            <button onClick={() => setChangeRepeat(3)}>
              <Image
                src={'/svg/repeat.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-repeat"
                width={24}
                height={24}
              />
            </button>
          ) : (
            <button onClick={() => setChangeRepeat(1)}>
              <Image
                src={'/svg/repeatonce.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-repeat"
                width={24}
                height={24}
              />
            </button>
          )}
          {changeShuffle ? (
            <button onClick={() => setChangeShuffle(!changeShuffle)}>
              <Image
                src={'/svg/random.svg'}
                style={{ filter: 'invert(60%)' }}
                alt="footer-random"
                width={24}
                height={24}
              />
            </button>
          ) : (
            <button onClick={() => setChangeShuffle(!changeShuffle)}>
              <Image
                src={'/svg/random.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-random"
                width={24}
                height={24}
              />
            </button>
          )}
          {changeDropUp ? (
            <button
              onClick={() => setChangeDropUp(!changeDropUp)}
              className={!changeDropUp ? 'rotate-180' : 'rotate-0'}>
              <Image src={'/svg/arrowtop.svg'} alt="footer-arrow-top" width={24} height={24} />
            </button>
          ) : (
            <button
              onClick={() => setChangeDropUp(!changeDropUp)}
              className={!changeDropUp ? 'rotate-180' : 'rotate-0'}>
              <Image src={'/svg/arrowtop.svg'} alt="footer-arrow-top" width={24} height={24} />
            </button>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default Footer
