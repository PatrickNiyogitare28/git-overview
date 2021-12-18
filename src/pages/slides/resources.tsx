import React, { useState } from 'react';
import Image from 'next/image';
import { ISlide } from '../../interfaces/ISlide';

const Resources: React.FC = () => {

    return (
       <div className="resources-container pt-10">
           <h1 className="text-6xl text-white mb-10 mt-7 pt-6 text-center font-extrabold">RESOURCES</h1>
        <div className="resources-links-container p-10">
            <a href="https://www.youtube.com/watch?v=OJqUWvmf4gg" target="_blank" className="resources-links-container__item">
                <Image draggable="false" src="/images/github-for-beginners.png" alt="github-for-beginners" width="320" height="180"/>
                <h4 className='resource-name text-white'><span>Name:</span> Git/Github for beginners</h4>
                <h4 className='resource-name text-white'><span>Author:</span> By Traversy Media On Youtube</h4>
            </a>
            <a href="https://www.youtube.com/watch?v=HbSjyU2vf6Y" target="_blank" className="resources-links-container__item">
                <Image draggable="false" src="/images/github-forking.jpg" alt="github-forking" width="320" height="180"/>
                <h4 className='resource-name text-white'><span>Name:</span>Forking and contributing</h4>
                <h4 className='resource-name text-white'><span>Author:</span> By The Net Ninja On Youtube</h4>
            </a>
            <a href="https://www.youtube.com/watch?v=jhtbhSpV5YA" target="_blank" className="resources-links-container__item">
                <Image draggable="false" src="/images/using-github.jpg" alt="using-github" width="320" height="180"/>
                <h4 className='resource-name text-white'><span>Name:</span> Using Github In A Team</h4>
                <h4 className='resource-name text-white'><span>Author:</span> By Ako Dev On Youtube</h4>
            </a>
        </div>
       </div>
    )
}
export default Resources;