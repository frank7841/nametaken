import React from 'react'

const Layout=()=> {
  return (
    <div>
              <div className="layouts">
        <div className="layouts__center center">
          <div className="layouts__wrap">
            <div className="layouts__head" data-aos="animation-scale-y">
              <div className="layouts__stage stage">Auto Adaptive layouts</div>
              <h2 className="layouts__title title">Responsive DNA<span className="title__color">.</span></h2>
            </div>
            <div className="layouts__info info" data-aos="animation-scale-y"> Have fully responsive cross-platform Applications! Surprise your target Market.</div>
            <div className="layouts__list">
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-1.svg" alt=""/></div>
                <div className="layouts__text">Eye Catchy Designs</div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-2.svg" alt=""/></div>
                <div className="layouts__text">Accomodate over 90% of your customers </div>
              </div>
              <div className="layouts__item" data-aos="animation-scale-y">
                <div className="layouts__icon"><img className="layouts__pic" src="img/layout-3.svg" alt=""/></div>
                <div className="layouts__text">Marrying your existing systems</div>
              </div>
            </div>
          </div>
          <div className="layouts__view" data-aos>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-1.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-2.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-3.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-4.png" alt=""/></div>
            <div className="layouts__preview"><img className="layouts__pic" src="img/layouts-pic-5.png" alt=""/></div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Layout