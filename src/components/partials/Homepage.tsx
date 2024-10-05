import Mix from '../list/Mix'
import Fav from '../list/Fav'
import Fast from '../list/Fast'
import Community from '../list/Community'
import { useEffect, useState } from 'react'

interface isType {
  mood?: string
}
const shuffleArray = <T,>(array: T[]): T[] => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

const HomePage: React.FC<isType> = ({ mood }) => {
  const [shuffledComponents, setShuffledComponents] = useState<JSX.Element[]>([])
  useEffect(() => {
    const components = [
      <Fav key="fav" mood={mood} />,
      <Mix key="mix" mood={mood} />,
      <Fast key="fast" mood={mood} />,
      <Community key="community" mood={mood} />,
    ]
    const shuffled = shuffleArray(components)

    setShuffledComponents(shuffled)
  }, [mood])

  return <div>{shuffledComponents}</div>
}

export default HomePage
