import React from 'react';
import Image from 'next/image'

const Definitions: React.FC = () => {
    return (
        <div className='flex justify-around h-screen flex-col'>
        <div className="flex justify-around h-48   flex-col" style={{alignItems:'center'}}>
            <h1 className='text-white text-4xl font-extrabold text-8xl'>Github</h1>
            
            <p className='text-white mt-10 text-2xl' style={{width: '650px'}}> 
            Github is a code hosting platform for version control and collaboration. It internally uses git but it simplifies the work because git is usually a command-line software while GitHub is a graphical user interface application(website, desktop app).
            </p>
        </div>
        
        </div>
    )
}
export default Definitions;