import React from 'react'

const Demo=()=> {
  return (
    <div>
         <div class="demo">
        <div class="demo__center center">
          <div class="demo__head" data-aos="animation-scale-y">
            <div class="demo__icon">🔥</div>
            <div class="demo__info">We offer flexible pricing options to our customers.</div>
          </div>
          <div class="demo__list">
            <div class="demo__item" data-aos="animation-translate-y">
              <h3 class="demo__title title title_sm">Schedule <br/>Product <br/>Demo</h3>
              <div class="demo__text">Still not sure? Schedule a demo to see how Safetek can help you get more done.</div><a class="demo__btn btn btn_purple js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Schedule a Demo</a>
            </div>
            <div class="demo__item" data-aos="animation-translate-y" data-aos-delay="200">
              <h3 class="demo__title title title_sm">Get <br/>Started <br/>Now</h3>
              <div class="demo__text">Ready to digitally revolutionize your organization? Try safetek Systems Now.</div><a class="demo__btn btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Call Us Now</a>
            </div>
          </div>
        </div>
        <div class="demo__circle js-rellax" data-rellax-speed="1"></div>
      </div>
     
    </div>
  )
}

export default Demo