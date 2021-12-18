import React from 'react';
import Image from 'next/image'
import { IDefinitionsProps } from '../../interfaces/IPageProps';

const Definitions: React.FC<IDefinitionsProps> = ({showDefinitions=false}) => {
    return (
        <div className='flex justify-around h-screen flex-col'>
        <div className="flex justify-around h-48   flex-col" style={{alignItems:'center'}}>
            <h1 className='text-white text-4xl font-extrabold text-8xl'><code>Then What's Git</code> <span className='text-8xl'>🤔</span></h1>
            {showDefinitions && 
            <>
            <p className='text-white mt-10 text-2xl' style={{width: '650px'}}> 
            <code className='font-extrabold'>Git</code> is software for tracking changes in any set of files usually used for coordinating programmers working on the same product.
            </p>
            <div className='flex mt-20' style={{width: '650px'}}>
                <Image src="/images/linus-avatar.jpg" width="150" height="150" alt="linux avatar" className='rounded-full	'/>
                <p className='text-white mt-3 ml-5 w-3/4 text-2xl'> <code className='font-extrabold'>Git</code> was developed in 2005 by Linus Torvalds, the famous creator of the Linux kernel.</p>
            </div>
            </>
            }
        </div>
        
        </div>
    )
}
export default Definitions;