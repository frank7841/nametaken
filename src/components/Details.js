import React from 'react'

const Details=()=> {
  return (
    <div>
              <div class="details">
        <div class="details__center center">
          <div class="details__head" data-aos="animation-scale-y">
            <h2 class="details__title title">Research & <br/>background, summary<span class="title__color">.</span></h2>
            <div class="details__info info">Collab is fast. Files are always up to date and ready for production</div>
          </div>
          <div class="details__row">
            <div class="details__container">
              <div class="details__slider js-details-slider">
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
                <div class="details__slide">
                  <div class="details__counter"><span class="details__number">16</span> m</div>
                  <div class="details__text">It’s easy to share designs across the organization, so collaboration is easy.</div>
                  <div class="details__control"><button class="details__play">Play</button><a class="details__link" href="#">Find out more</a></div>
                </div>
              </div>
            </div>
            <div class="details__graphic">
              <div class="details__mobile"><img class="details__pic" src="img/mobile.svg" alt=""/>
                <div class="details__box">
                  <div class="details__chart" data-aos data-aos-offset="0" data-aos-delay="300" data-aos-duration="1000"><img class="details__pic" src="img/chart.svg" alt=""/></div>
                </div>
              </div>
            </div>
          </div>
          <div class="details__hand"><img class="details__pic js-parallax" data-scale="1.2" data-orientation="up" src="img/hand-5.png" alt=""/></div>
          <div class="details__line"><img class="details__pic" src="img/line-2.svg" alt=""/></div>
          <div class="details__circles">
            <div class="details__circle"></div>
            <div class="details__circle js-rellax" data-rellax-speed="-.5"></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Details