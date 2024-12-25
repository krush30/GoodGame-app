import React from 'react';

const ImageCard = ({ title, image, price }) => {
    return (
        <div className="w-56 bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform">
            <div className="h-40 bg-gray-700">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-center object-contain"
                />
            </div>
            <div className="p-4">
                <h4 className="text-white text-lg font-semibold text-center mb-2">{title}</h4>
                <p className="text-yellow-500 text-center text-sm font-medium">${price}</p>
            </div>
        </div>
    );
};

export default ImageCard;
