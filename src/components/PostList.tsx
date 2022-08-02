import { useState } from 'react';
import { usePosts } from '../hooks/usePosts';
import { Post } from '../interfaces/Post';
import { FavesPicker } from './FavesPicker';
import { OptionPicker } from './OptionPicker';
import { Pagination } from './Pagination';
import { PostItem } from './PostItem';
import './PostList.css';

export const PostList = () => {

    const { posts, option, numPages, setOption, setPage } = usePosts()
    const [faves, setFaves] = useState(false)

    const handlePageChange = (currentPage: number) => {
        setPage(currentPage)
    }

    const handleFavesChange = (value: boolean) => {
        setFaves(value)
    }

    const handleOptionChange = (value: string) => {
        setOption(value)
    }

    return (
        <div>

            <FavesPicker onChange={handleFavesChange} />

            <OptionPicker onChange={handleOptionChange} />

            <div className='post-list'>
                {posts.map((post: Post) => (
                    (
                        (faves && Boolean(localStorage.getItem(post.objectID))) || !faves
                    ) && (
                        <PostItem post={post} key={post.objectID} />
                    )
                ))}
            </div>

            {
                option && <Pagination
                    numPages={numPages}
                    onPageChange={handlePageChange}
                />
            }

        </div>
    )
}
