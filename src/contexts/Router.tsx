'use client'
import { createContext, ReactNode } from 'react'
import { useRouter } from 'next/navigation'

interface RouterProps {
  push: (url: string) => void
  replace: (url: string) => void
}

export const RouterContext = createContext<RouterProps>({
  push: () => {},
  replace: () => {},
})

interface RouterProviderProps {
  children: ReactNode
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const router = useRouter()
  return <RouterContext.Provider value={router}>{children}</RouterContext.Provider>
}
