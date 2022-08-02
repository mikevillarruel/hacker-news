import { useEffect, useState } from 'react';


export const usePagination = (numPages: number) => {

    const [currentPage, setCurrentPage] = useState(1)

    const [paginationData, setPaginationData] = useState<number[]>([]);

    const spaces = 7

    const range = (start: number, end: number) => Array.from({ length: (end - start + 1) }, (v, k) => k + start);


    const right = () => {
        if (currentPage < numPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const left = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        if (numPages < 1) {
            setPaginationData([])
        } else if (numPages > 1 && numPages <= 10) {
            setPaginationData(range(1, numPages))
        } else {
            var data: number[] = []

            if (currentPage > (spaces / 2) + 1) {

                if (currentPage >= (numPages - (spaces / 2))) {
                    data = [1, 0, ...range(numPages - spaces + 3, numPages)]
                } else {
                    data = [1, 0, ...range(currentPage - Math.floor((spaces - 4) / 2), currentPage + Math.floor((spaces - 4) / 2)), 0, numPages]
                }

            } else {
                data = [...range(1, spaces - 2), 0, numPages]
            }

            setPaginationData(data)
        }

    }, [currentPage, numPages])


    return {
        paginationData,
        left,
        right,
        currentPage,
        setCurrentPage,
    }

}