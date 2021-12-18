import React, { useState } from 'react';
import { ISlide } from '../../interfaces/ISlide';
import GitConceptsSlide from './common-concepts';
import Definitions from './definitions';
import GitUsesSlide from './git-uses';
import GithubSlide from './github';
import CodeHostingPlatform from './hosting-platforms';
import TalkIntroduction from './introduction';
import StorySlide from './story';
import Resources from './resources';

const Slide: React.FC = () => {
const [activeSlide, setActiveSlide] = useState<number>(0);
const slides: Array<ISlide> = [
  {
    index: 0,
    content: <StorySlide />
  },
  {
      index: 1,
      content: <TalkIntroduction/>
  },
  {
      index: 2,
      content: <Definitions />
  },
  {
    index: 3,
    content: <Definitions showDefinitions={true}/>
  },
  {
    index: 4,
    content: <CodeHostingPlatform/>
  },
  {
    index: 5,
    content: <GithubSlide/>
  },
  {
    index: 6,
    content: <GitConceptsSlide/>
  },
  {
    index: 7,
    content: <GitConceptsSlide showNext={true}/>
  },
  {
    index: 8,
    content: <GitUsesSlide/>
  },
  {
    index: 9,
    content: <Resources />
  },
]
if(typeof window !== 'undefined'){
    document.onkeydown = checkKey;
}
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
      if(activeSlide === 0) return;
      setActiveSlide(activeSlide - 1)
    }
    else if (e.keyCode == '40') {
        // down arrow
      if(activeSlide === slides.length -1) return;
      setActiveSlide(activeSlide+1);

    }
    else if (e.keyCode == '37') {
       // left arrow
     if(activeSlide === 0) return;
      setActiveSlide(activeSlide - 1)

    }
    else if (e.keyCode == '39') {
       // right arrow
       if(activeSlide === slides.length -1) return;
       setActiveSlide(activeSlide+1);
    }
}
const RenderSlide = () => {
    return <div>{slides[activeSlide].content}</div>
}
    return (
        <div >
         <RenderSlide />
        </div>
    )
}
export default Slide;