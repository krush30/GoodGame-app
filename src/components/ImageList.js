import React, { useState } from 'react';
import ImageCard from './ImageCard';

const ImageList = ({ title, image, price }) => {
    console.log(title);



    return (
        <div className='py-6 flex flex-wrap'>


            <div className='overflow-x-auto no-scrollbar px-6'>
                <div className='flex flex-wrap gap-4 justify-center'>
                    <ImageCard
                        title={title}
                        image={image}
                        price={price}

                    />

                </div>
            </div>
        </div>
    );
};

export default ImageList;
