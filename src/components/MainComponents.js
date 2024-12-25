import React from 'react'
import ImageComp from './ImageComp';
import useImage from '../hooks/useImage';

const MainComponents = () => {
    useImage()

    return (
        <div>
            <ImageComp />
        </div>
    )
}

export default MainComponents;
