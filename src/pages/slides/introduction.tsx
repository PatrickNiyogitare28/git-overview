import React from 'react';
import Image from 'next/image';

const TalkIntroduction: React.FC = () => {
    return (
       <div className="introduction-container">
        <div className="intro-content-container">
           <div className="flex justify-around w-screen h-screen items-center flex-col">
             <Image src="/images/git-logo.png" alt="git" className="" width="800" height="300"/>
             <ul style={{width: '300px', display:'flex', justifyContent:'space-between'}}>
                 <li className="text-white">Patrick NIYOGITARE</li>
                 <li className="text-white">Pacis NKUBITO</li>
             </ul>
           </div>
        </div>
       </div>
    )
}
export default TalkIntroduction;