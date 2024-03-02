import React from 'react';

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center bg-secondary text-primary-content w-full">
            <div className="max-w-2xl w-full p-5">
                <h2 className="text-4xl font-extrabold text-left">React Context Music</h2>
                <p className="mt-4 mb-4 text-lg text-gray-500 text-left">
                    A little music player application. It uses Context API in combination with Reducer State. The TrackList and Controls components are siblings and do not share information through the traditional props route. It's all Context baby!
                </p>
            </div>
        </div>
    );
};

export default Banner;
