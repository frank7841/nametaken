import React from 'react'

function Showcase() {
  return (
    <div>
        <div class="showcase">
        <div class="showcase__center center">
          <div class="showcase__wrap">
            <div class="showcase__top" data-aos="animation-scale-y">
              <div class="showcase__stage stage">Showcase</div>
              <h2 class="showcase__title title">Created at Safetek <span class="title__color">.</span></h2>
            </div>
            <div class="showcase__info info" data-aos="animation-scale-y" data-aos-delay="150"></div>
            <div class="showcase__btn" data-aos="animation-scale-y" data-aos-delay="300"><button class="btn btn_purple">View More Projects</button></div>
          </div>
        </div>
        <div class="showcase__bg"><img class="showcase__pic" src="img/showcase-circle.svg" alt=""/></div>
        {/* <div class="showcase__circles">
          <div class="showcase__circle"></div>
          <div class="showcase__circle"></div>
        </div> */}
        {/* <div class="showcase__list">
          <div class="showcase__preview"><img class="showcase__pic js-parallax" data-scale="1.3" data-orientation="right" src="img/group-1.png" alt=""/></div>
          <div class="showcase__preview"><img class="showcase__pic js-parallax" data-scale="1.3" data-orientation="left" src="img/group-2.png" alt=""/></div>
        </div> */}
      </div>
    </div>
  )
}

export default Showcase