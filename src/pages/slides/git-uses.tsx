import React from 'react';
import Image from 'next/image'

export interface IUse{
    title: string
}
const GitUsesSlide: React.FC = () => {
    const concepts: Array<IUse> = [
        
        {
            title: 'Managing source codes & Tracking history + versions',
        },
        {
            title: 'Distributed Development & team collaboration',
        },
        {
            title:'Code review',
        },
        {
            title:'CI/CD (Continuous Integration & Continuous Delivery/Deployment)',
        },
        {
            title:'For Open Source',
        },
        {
            title:'Etc ...',
        }
    ]
    return (
        <div className='flex justify-around h-screen flex-col'>
        <div className="flex justify-around h-48   flex-col" style={{alignItems:'center'}}>
            <h1 className='text-white text-4xl font-extrabold text-8xl'><code>Out of the Box uses   🚀</code></h1>
            <div className=''>
                {concepts.map((concept:IUse, index: number) => (
                <div className='mt-7' style={{width:'700px'}}>
                 <label className='text-white text-xl font-extrabold'>
                     <span className='text-sm  text-white'
                      style={{
                          backgroundColor:'#097a40',
                          padding:'15px',
                          borderRadius:'50%'
                          }}>✔️</span> 
                    <span className="ml-8">
                     {concept.title}
                    </span>
                     </label>
                </div>
                ))}
               
            </div>
        </div>
        
        </div>
    )
}
export default GitUsesSlide;