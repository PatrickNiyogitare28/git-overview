import React, { useState } from 'react';
import Image from 'next/image';
import { ISlide } from '../../interfaces/ISlide';

const TalkIntroduction: React.FC = () => {

    return (
       <div className="introduction-container">
        <div className="intro-content-container">
           <div className="flex justify-around w-screen h-screen items-center flex-col">
             <Image draggable="false" src="/images/git-logo.png" alt="git" width="800" height="300"/>
             <ul style={{width: '400px', display:'flex', justifyContent:'space-between'}}>
                 <li className="text-white text-center font-bold text-2xl">Patrick NIYOGITARE</li>
                 <li className="text-white text-center font-bold text-2xl">Pacis NKUBITO</li>
             </ul>
           </div>
        </div>
       </div>
    )
}
export default TalkIntroduction;