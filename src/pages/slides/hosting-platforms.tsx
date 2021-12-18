import React from 'react';
import { IDefinitionsProps } from './IProps';
import Image from 'next/image'

export interface IPlatform{
   name: string,
   Logo: any
}

const CodeHostingPlatform: React.FC = () => {
   
    const platforms: Array<IPlatform> = [
        {
            name: 'Github',
            Logo: <Image src="/icons/github-icon.png" alt="github icon" width="150" height="150" draggable="false"/>
        },
        {
            name: 'Gitlab',
            Logo: <Image src="/icons/gitlab-icon.png" alt="gitlab icon" width="100" height="100" draggable="false"/>
        },
        {
            name: 'Git Bucket',
            Logo: <Image src="/icons/gitbucket-icon.png" alt="gitbucket icon" width="100" height="100" draggable="false"/>
        }
    ]
    return (
        <div className='flex justify-around h-screen flex-col'>
        <div className="flex justify-around h-48   flex-col" style={{alignItems:'center'}}>
            <h1 className='text-white text-4xl font-extrabold text-8xl'>Git Code Hosting Platforms</h1>
            <div className='flex justify-between mt-20' style={{width: '600px'}}>
             {
                platforms.map((platform: IPlatform, index:number) => (
                    <div className="flex flex-col justify-between" >
                        {platform.Logo}
                        <label className='text-white text-center font-bold text-2xl'>{platform.name}</label>
                    </div>
                ))
             }
            </div>
        </div>
        
        </div>
    )
}
export default CodeHostingPlatform;