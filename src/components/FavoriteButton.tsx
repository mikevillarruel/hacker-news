import { useState } from 'react';
import favoriteLogo from '../assets/images/favorite.svg';
import noFavoriteLogo from '../assets/images/no-favorite.svg';
import './FavoriteButton.css';

interface Props {
    objectID: string;
}

export default function FavoriteButton({ objectID }: Props) {

    const [favorite, setFavorite] = useState(localStorage.getItem(objectID) ? true : false)

    return (
        <div className='container' onClick={() => {
            favorite ?
                localStorage.removeItem(objectID)
                :
                localStorage.setItem(
                    objectID, 'favorite'
                )
            setFavorite(!favorite)
        }}>
            <div className='favorite-container'>
            </div>
            {
                favorite ?
                    <img src={favoriteLogo} className="icon-favorite" />
                    :
                    <img src={noFavoriteLogo} className="icon-favorite" />
            }
        </div>
    )
}
