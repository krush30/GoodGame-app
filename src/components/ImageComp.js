import React from 'react'
import { useSelector } from 'react-redux';
import ImageList from './ImageList';

const ImageComp = () => {
    const image = useSelector(store => store.images);
    return (
        image.addimage && (
            <div className='bg-black flex flex-wrap'>
                {image.addimage.map((img, index) => (
                    <div key={index} className='mt-0 pl-4 relative z-20'>
                        <ImageList title={img.name} image={img.image} price={img.price} />
                    </div>
                ))}


            </div>)
    )
}

export default ImageComp;
