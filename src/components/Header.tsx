import hackerNewsLogo from '../assets/images/hacker-news.svg'
import './Header.css'

export default function Header() {
    return (
        <div className='header-page' >
            <img className='hacker-news' src={hackerNewsLogo} />
        </div>
    )
}
