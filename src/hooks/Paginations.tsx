import { useState } from 'react'

interface PaginationResult<T> {
  currentPage: number
  totalPages: number
  paginatedData: T[]
  nextPage: () => void
  prevPage: () => void
  goToPage: (page: number) => void
  goToFirstPage: () => void
  goToLastPage: () => void
}

function usePagination<T>(data: T[], itemsPerPage: number): PaginationResult<T> {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.min(data.length / itemsPerPage,2)

  const paginatedData = data.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const goToPage = (page: number) => {
    if (page >= 0 && page < totalPages) {
      setCurrentPage(page)
    }
  }

  const goToFirstPage = () => setCurrentPage(0)

  const goToLastPage = () => setCurrentPage(totalPages - 1)

  return {
    currentPage,
    totalPages,
    paginatedData,
    nextPage,
    prevPage,
    goToPage,
    goToFirstPage,
    goToLastPage,
  }
}

export default usePagination