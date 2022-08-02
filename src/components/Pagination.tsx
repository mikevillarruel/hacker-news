import { useEffect } from 'react';
import { usePagination } from "../hooks/usePagination";
import './Pagination.css';

interface Props {
    numPages: number;
    onPageChange: (currentPage: number) => void;
}

export const Pagination = ({ numPages, onPageChange }: Props) => {

    const { paginationData, right, left, setCurrentPage, currentPage } = usePagination(numPages);

    const handleArrowClassNameLeft = (): string => currentPage > 1 ? 'arrow' : ''
    const handleArrowClassNameRight = (): string => currentPage < numPages ? 'arrow' : ''

    useEffect(() => {
        onPageChange(currentPage)
    }, [currentPage])

    return (
        (paginationData.length) ? (
            <div className="pagination">
                <button className={handleArrowClassNameLeft()} onClick={() => left()}>
                    &lt;
                </button>
                {
                    paginationData.map((item, index) => (
                        <button
                            key={index}
                            className={(item == currentPage) ? 'pagination-selected' : ''}
                            onClick={() => {
                                if (item) {
                                    setCurrentPage(item)
                                }
                            }}
                        >
                            {item ? item : '...'}
                        </button>
                    ))
                }
                <button className={handleArrowClassNameRight()} onClick={() => right()}>
                    &gt;
                </button>
            </div>
        ) : <></>
    )
}
