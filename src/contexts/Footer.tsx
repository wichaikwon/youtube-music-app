'use client'
import Image from 'next/image'
import { createContext, useState, useContext, ReactNode, useRef, useEffect } from 'react'

interface FooterContextProps {
  volume: number
  setVolume: (volume: number) => void
  changeVolume: boolean
  setChangeVolume: (change: boolean) => void
  changeRepeat: number
  setChangeRepeat: (repeat: number) => void
  changeShuffle: boolean
  setChangeShuffle: (shuffle: boolean) => void
  changeDisLike: boolean
  setChangeDisLike: (dislike: boolean) => void
  changeLike: boolean
  setChangeLike: (like: boolean) => void
  changeDots: boolean
  setChangeDots: (dots: boolean) => void
  changePlay: boolean
  setChangePlay: (play: boolean) => void
  changeDropUp: boolean
  setChangeDropUp: (dropUp: boolean) => void
}

const FooterContext = createContext<FooterContextProps | undefined>(undefined)

export const useFooterContext = () => {
  const context = useContext(FooterContext)
  if (!context) {
    throw new Error('useFooterContext must be used within a FooterProvider')
  }
  return context
}

interface FooterProviderProps {
  children: ReactNode
}

export const FooterContextProvider: React.FC<FooterProviderProps> = ({ children }) => {
  const [volume, setVolume] = useState<number>(100)
  const [changeVolume, setChangeVolume] = useState(true)
  const [changeRepeat, setChangeRepeat] = useState(1)
  const [changeShuffle, setChangeShuffle] = useState(true)
  const [changeDisLike, setChangeDisLike] = useState(false)
  const [changeLike, setChangeLike] = useState(false)
  const [changeDots, setChangeDots] = useState(false)
  const [changePlay, setChangePlay] = useState(false)
  const [changeDropUp, setChangeDropUp] = useState(false)
  const audioRef = useRef<HTMLAudioElement>({} as HTMLAudioElement)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value))
  }
  return (
    <FooterContext.Provider
      value={{
        volume,
        setVolume,
        changeVolume,
        setChangeVolume,
        changeRepeat,
        setChangeRepeat,
        changeShuffle,
        setChangeShuffle,
        changeDisLike,
        setChangeDisLike,
        changeLike,
        setChangeLike,
        changeDots,
        setChangeDots,
        changePlay,
        setChangePlay,
        changeDropUp,
        setChangeDropUp,
      }}>
      {children}
      <div className="fixed bottom-0 z-40 flex h-16 w-full items-center justify-between bg-gray-800 px-8">
        <div className="flex gap-4">
          <button>
            <Image src="/svg/playprevious.svg" alt="footer-previous-play" width={32} height={32} />
          </button>
          {changePlay ? (
            <button onClick={() => setChangePlay(!changePlay)}>
              <Image src="/svg/pause.svg" alt="footer-play" width={48} height={48} />
            </button>
          ) : (
            <button onClick={() => setChangePlay(!changePlay)}>
              <Image src="/svg/play.svg" alt="footer-play" width={48} height={48} />
            </button>
          )}
          <button>
            <Image src="/svg/playnext.svg" alt="footer-next-play" width={32} height={32} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/fast/1.jpg" alt="footer-fast-1" width={48} height={48} />
          <div className="flex flex-col gap-2 text-sm">
            <span>span </span>
            <div className="flex items-center">
              <button>button</button>
              <Image src="/svg/dot.svg" alt="footer-dot" width={20} height={20} />
              <button>button</button>
              <Image src="/svg/dot.svg" alt="footer-dot" width={20} height={20} />
              <span>span </span>
            </div>
          </div>
          <div className="flex gap-4">
            {changeDisLike ? (
              <button
                onClick={() => {
                  setChangeDisLike(!changeDisLike)
                  setChangeLike(false)
                }}>
                <Image src="/svg/disliked.svg" alt="footer-disliked" width={32} height={32} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setChangeDisLike(!changeDisLike)
                  setChangeLike(false)
                }}>
                <Image src="/svg/dislike.svg" alt="footer-dislike" width={32} height={32} />
              </button>
            )}
            {changeLike ? (
              <button
                onClick={() => {
                  setChangeLike(!changeLike)
                  setChangeDisLike(false)
                }}>
                <Image src="/svg/liked.svg" alt="footer-liked" width={32} height={32} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setChangeLike(!changeLike)
                  setChangeDisLike(false)
                }}>
                <Image src="/svg/like.svg" alt="footer-like" width={32} height={32} />
              </button>
            )}
            <button onClick={() => setChangeDots(!changeDots)}>
              <Image src="/svg/dots.svg" alt="footer-dots" width={32} height={32} />
            </button>
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
                  setChangeVolume(!changeVolume)
                  setVolume(0)
                }}
                className={volume > 0 ? 'opacity-100' : 'opacity-0'}>
                <Image
                  src={'/svg/speaker.svg'}
                  style={{ filter: 'invert(60%)' }}
                  alt="footer-speaker"
                  width={32}
                  height={32}
                />
              </button>
            ) : (
              <button
                onClick={() => {
                  setChangeVolume(!changeVolume)
                  setVolume(100)
                }}
                className={volume === 0 ? 'opacity-100' : 'opacity-0'}>
                <Image
                  src={'/svg/speakeroff.svg'}
                  style={{ filter: 'invert(60%)' }}
                  alt="footer-speakeroff"
                  width={32}
                  height={32}
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
                width={32}
                height={32}
              />
            </button>
          ) : changeRepeat === 2 ? (
            <button onClick={() => setChangeRepeat(3)}>
              <Image
                src={'/svg/repeat.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-repeat"
                width={32}
                height={32}
              />
            </button>
          ) : (
            <button onClick={() => setChangeRepeat(1)}>
              <Image
                src={'/svg/repeatonce.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-repeat"
                width={32}
                height={32}
              />
            </button>
          )}
          {changeShuffle ? (
            <button onClick={() => setChangeShuffle(!changeShuffle)}>
              <Image
                src={'/svg/random.svg'}
                style={{ filter: 'invert(60%)' }}
                alt="footer-random"
                width={32}
                height={32}
              />
            </button>
          ) : (
            <button onClick={() => setChangeShuffle(!changeShuffle)}>
              <Image
                src={'/svg/random.svg'}
                style={{ filter: 'invert(100%)' }}
                alt="footer-random"
                width={32}
                height={32}
              />
            </button>
          )}
          {changeDropUp ? (
            <button
              onClick={() => {
                setChangeDropUp(!changeDropUp)
              }}
              className={!changeDropUp ? '-rotate-180' : 'rotate-0 transition duration-500'}>
              <Image src={'/svg/arrowtop.svg'} alt="footer-arrow-top" width={32} height={32} />
            </button>
          ) : (
            <button
              onClick={() => {
                setChangeDropUp(!changeDropUp)
              }}
              className={!changeDropUp ? '-rotate-180 transition duration-500' : 'rotate-0'}>
              <Image src={'/svg/arrowtop.svg'} alt="footer-arrow-top" width={32} height={32} />
            </button>
          )}
        </div>
      </div>
    </FooterContext.Provider>
  )
}
