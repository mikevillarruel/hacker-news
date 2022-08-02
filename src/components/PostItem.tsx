import timeLogo from '../assets/images/iconmonstr-time.svg';
import { Post } from '../interfaces/Post';
import FavoriteButton from './FavoriteButton';
import './PostItem.css';


interface Props {
    post: Post
}

const SECONDS = 1
const MINUTES = 60 * SECONDS
const HOURS = 60 * MINUTES
const DAYS = 24 * HOURS

export const PostItem = ({ post }: Props) => {


    const getTimeAgo = (created_at: string): string => {

        var currentDateTime = new Date();
        var resultInSeconds = currentDateTime.getTime() / 1000;

        var time = new Date(created_at);
        var timeInSeconds = time.getTime() / 1000;

        if (timeInSeconds > resultInSeconds || timeInSeconds <= 0) {
            return "in the future"
        }

        const diff = resultInSeconds - timeInSeconds;

        var timeAgo = (diff < MINUTES) ? "Just now"
            : (diff < 2 * MINUTES) ? "a minute ago"
                : (diff < 60 * MINUTES) ? `${Math.round(diff / MINUTES)} minutes ago`
                    : (diff < 2 * HOURS) ? "1 hour ago"
                        : (diff < 24 * HOURS) ? `${Math.round(diff / HOURS)} hours ago`
                            : (diff < 48 * HOURS) ? "yesterday"
                                : `${Math.round(diff / DAYS)} days ago`

        return timeAgo
    }


    return (
        <div className='post-container'>
            <a href={post.story_url} target="_blank">
                <div className='details-container'>
                    <div className='hours-ago-container'>
                        <img src={timeLogo} className='time-logo' />
                        <span className='hours-ago-by-author Text-Style-2'>
                            {getTimeAgo(post.created_at)} by {post.author}
                        </span>
                    </div>
                    <p className='story-title'>
                        {post.story_title}
                    </p>
                </div>
            </a>
            <FavoriteButton objectID={post.objectID} />
        </div >
    )
}
