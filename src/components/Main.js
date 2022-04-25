import React from 'react'

const  Main=()=> {
  return (
    <div>
        <div className="main__center center">
          <div className="main__wrap">
            <h1 className="main__title title title_big" data-aos><span className="title__box"><span className="title__text">Create </span></span><span className="title__box"><span className="title__text"><span className="title__line">Like</span></span></span><span className="title__box"><span className="title__text">Never</span></span><span className="title__box"><span className="title__text">Before<span className="title__color">.</span></span></span></h1>
            <div className="main__info info" data-aos="animation-scale-y" data-aos-delay="400">Create, build and Advance to a digital Space. Welcome  code! 👋</div>
            <div className="main__control" data-aos="animation-scale-y" data-aos-delay="550"><a className="main__btn btn btn_purple" href="login.html">Get Started</a><a className="main__link" href="#">
                <div className="main__icon"><img className="main__pic" src="img/play.svg" alt=""/></div>
                <div className="main__text">See It In Action!</div>
              </a></div>
            <div className="main__scroll" data-aos="animation-scale-y" data-aos-delay="650"><a className="main__link" href="#">
                <div className="main__icon"><img className="main__pic" src="img/scroll.svg" alt=""/></div>
                <div className="main__text">Scroll to explore</div>
              </a></div>
          </div>
          <div className="main__view" data-aos>
            <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5" data-orientation="down" src="img/main-pic-1.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/main-pic-2.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic" src="img/mouse.png" alt=""/></div>
            <div className="main__preview"><img className="main__pic" src="img/main-pic-3.png" alt=""/></div>
          </div>
          <div className="main__circles">
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
            <div className="main__circle js-rellax" data-rellax-speed="2"></div>
            <div className="main__circle js-rellax" data-rellax-speed=".3"></div>
            <div className="main__circle"></div>
            <div className="main__circle js-rellax" data-rellax-speed="1"></div>
          </div>
        </div>


    </div>
  )
}

export default Main