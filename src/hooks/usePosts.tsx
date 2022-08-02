import { useEffect, useState } from 'react';
import { hackerNewsApi } from "../api/hackerNewsApi";
import { HackerNews, Post } from "../interfaces/Post";

export const usePosts = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1)
    const [option, setOption] = useState('')
    const [numPages, setNumPages] = useState(0)

    useEffect(() => {
        getPosts();
    }, [page])

    useEffect(() => {
        if (option) {
            getPosts();
            getNumPages();
        }
    }, [option])

    const getNumPages = async () => {
        const response = await hackerNewsApi.get<HackerNews>(`/search_by_date?query=${option}&page=${page - 1}`);
        setNumPages(response.data.nbPages);
    }

    const getPosts = async () => {
        if (option) {
            const response = await hackerNewsApi.get<HackerNews>(`/search_by_date?query=${option}&page=${page - 1}`);
            setPosts(response.data.hits.filter((value) =>
                value.author && value.created_at && value.story_title && value.story_url
            ))
        } else {
            setPosts([])
        }
    }

    return {
        posts,
        option,
        page,
        numPages,
        setOption,
        setPage,
    }

}