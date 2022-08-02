import { useEffect, useState } from 'react';
import './FavesPicker.css';

interface Props {
    onChange: (values: boolean) => void;
}

export const FavesPicker = ({ onChange }: Props) => {

    const [faves, setFaves] = useState(false)
    const getClassNameForFaves = (faves: boolean) => {
        return `option-all-faves ${faves && 'option-all-faves-active'}`
    }

    useEffect(() => {
        onChange(faves)
    }, [faves])

    return (

        <div className='option-all-faves-container'>
            <div onClick={() => setFaves(false)} className={getClassNameForFaves(!faves)}>
                All
            </div>
            <div onClick={() => setFaves(true)} className={getClassNameForFaves(faves)}>
                Faves
            </div>
        </div>
    )
}
