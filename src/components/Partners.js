import React from 'react'

const Partners=()=> {
  return (
    <div>
         <div class="partners">
        <div class="partners__center center">
          <div class="partners__head" data-aos="animation-scale-y">
            <div class="partners__stage stage">Clients</div>
            <div class="partners__details">
              <h2 class="partners__title title">Meet Our Clients.</h2>
              <div class="partners__info info">Happy Clients using our websites and applications.</div>
            </div>
          </div>
          <div class="partners__list">
            {/* <div class="partners__item" data-aos><img class="partners__pic" src="img/waves.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="150"><img class="partners__pic" src="img/goldlines.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="300"><img class="partners__pic" src="img/oliver.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="450"><img class="partners__pic" src="img/duotrip.svg" alt=""/></div>
            <div class="partners__item" data-aos><img class="partners__pic" src="img/rota-show.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="150"><img class="partners__pic" src="img/travelers.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="300"><img class="partners__pic" src="img/velocity-9.svg" alt=""/></div>
            <div class="partners__item" data-aos data-aos-delay="450"><img class="partners__pic" src="img/foxds.svg" alt=""/></div> */}
          </div>
        </div>
        <div class="partners__preview" data-aos data-aos-duration="1000"><img class="partners__pic" src="img/partners-pic.svg" alt=""/></div>
        <div class="partners__circle js-rellax" data-rellax-speed=".6"></div>
      </div>
    </div>
  )
}

export default Partners