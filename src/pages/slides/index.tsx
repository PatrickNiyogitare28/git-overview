import React, { useState } from 'react';
import { ISlide } from '../../interfaces/ISlide';
import Definitions from './definitions';
import TalkIntroduction from './introduction';
import StorySlide from './story';

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
}
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