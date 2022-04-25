import React from 'react'

const Offer=()=> {
  return (
    <div>
        <div class="offer">
        <div class="offer__center center">
          <div class="offer__container">
            <div class="offer__head">
              <h2 class="offer__title title" data-aos="animation-scale-y">Ready to be part of the Success Story?</h2>
              <div class="offer__info info" data-aos="animation-scale-y" data-aos-delay="150">We offer flexible pricing options .</div>
              <div class="offer__btn" data-aos="animation-scale-y" data-aos-delay="300"><a class="btn btn_white js-popup-open" href="#popup-contact" data-effect="mfp-zoom-in">Call Us Now</a></div>
            </div>
            <div class="offer__circles">
              <div class="offer__circle"></div>
              <div class="offer__circle"></div>
            </div>
          </div>
          <div class="offer__circle"></div>
        </div>
        <div class="offer__view" data-aos data-aos-delay="400" data-aos-offset="0">
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-1.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-2.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-3.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-4.png" alt=""/></div>
          <div class="offer__preview"><img class="offer__pic" src="img/offer-pic-5.png" alt=""/></div>
        </div>
      </div>

    </div>
  )
}

export default Offer