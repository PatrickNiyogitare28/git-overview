import React from 'react';
import Image from 'next/image';

const StorySlide: React.FC = () => {
const triggerTypeWritter = () => {
    let TxtRotate = function(el, toRotate, _) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = 200;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    
    TxtRotate.prototype.tick = function() {
      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];
    
      if (this.isDeleting) {
        // this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    
      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
      let that = this;
      let delta = 50;
    
      if (this.isDeleting) { delta /= 2; }
    
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
    
      setTimeout(function() {
        that.tick();
      }, delta);
    };
    
    if(typeof window != 'undefined'){
    window.onload = function() {
      let elements = document.getElementsByClassName('txt-rotate');
      for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-rotate');
        let period = 200;
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      let css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
  }
}

    return (
        <>
        {triggerTypeWritter()}
        <div className="flex justify-around w-screen h-screen items-center p-20 pt-1">
                <Image src="/images/character.svg" height="500" width="500" draggable="false"/>
                <div className="w-2/4 text-xl">
                     <h1 className="text-6xl text-white mb-20 font-extrabold">INTRODUCTION</h1>
                     <span
                            className="txt-rotate text-white text-2xl"
                            data-period="500"
                            data-rotate='["Last year, I was working on a project with a colleague and in order to share what we worked on either a feature we added or removed we had to share the files via slack so that our codes could stay updated. 
                            This was tiresome work and prone to many errors but it was because I did not know about GIT and most importantly Github.
                            "]'>
                            </span>
                </div>
        </div>
        </>
    )
}
export default StorySlide;