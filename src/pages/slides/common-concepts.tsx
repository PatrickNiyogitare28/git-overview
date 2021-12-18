import React from 'react';
import Image from 'next/image'

export interface IConcept{
    definition: string,
    title: string
}
const GitConceptsSlide: React.FC = () => {
    const concepts: Array<IConcept> = [
        
        {
            title: 'Repository',
            definition: ' A repository is a directory or storage space or a folder in your GitHub account where your project can live.'
        },
        {
            title: 'Branch',
            definition:'A branch represents an independent line of development. e.g: I got a task then I need a branch to handle that'
        },
        {
            title:'Commit',
            definition:'In Git, a commit is a snapshot of your repo at a specific point in time. ... '
        },
        {
            title:'Gitbash',
            definition:'Git Bash is an application for Microsoft Windows environments which provides an emulation layer for a Git command line experience. '
        },
    ]
    return (
        <div className='flex justify-around h-screen flex-col'>
        <div className="flex justify-around h-48   flex-col" style={{alignItems:'center'}}>
            <h1 className='text-white text-4xl font-extrabold text-8xl'><code>The Key Concepts 🗝️</code></h1>
            <div className=''>
                {concepts.map((concept:IConcept, index: number) => (
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
                 <p className='text-white mt-3 ml-20 text-2xl'>{concept.definition}</p>
                </div>
                ))}
               
            </div>
        </div>
        
        </div>
    )
}
export default GitConceptsSlide;