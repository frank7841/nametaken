import React from 'react'

const Feature=()=> {
  return (
    <div>
            <div className="features js-features">
        <div className="features__center center">
          <div className="features__head" data-aos="animation-scale-y">
            <div className="features__stage stage">Features</div>
            <div className="features__box">
              <h2 className="features__title title">The world’s most Advancing Software develoment Company .</h2>
              <div className="features__info info">Simultaneously grow, advance, and tower over your competitors with us.</div>
            </div>
          </div>
          <div className="features__body">
            <div className="features__container">
              <div className="features__slider js-features-slider">
                <div className="features__slide" data-aos="animation-scale-y">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/fill.png" alt=""/></div>
                    <div className="features__category">Breaking Barrers</div>
                    <div className="features__text">Our DNA is marked by having the will to achieve the unthikable, in scaling our clinets to greater technological heights</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide" data-aos="animation-scale-y" data-aos-delay="200">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/access-pic-1.png" alt=""/></div>
                    <div className="features__category">Critical Analysis</div>
                    <div className="features__text">Our able team uses achievale metric system to deliver not just what you want but you need, uniquely customised to your prefference.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/camera.png" alt=""/></div>
                    <div className="features__category">Lion Spirit</div>
                    <div className="features__text">We believe "If thought code will do "</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/calendar.png" alt=""/></div>
                    <div className="features__category">Timely Delivery</div>
                    <div className="features__text">We deliver our promise right on time.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
                <div className="features__slide">
                  <div className="features__details">
                    <div className="features__preview"><img className="features__pic" src="img/chatbox.png" alt=""/></div>
                    <div className="features__category">24/7 Live  Support</div>
                    <div className="features__text">Our technical Support team will walk with you every step of the way.</div><a className="features__link" href="#">Find out more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="features__status js-features-status"></div>
          </div>
        </div>
        <div className="features__circle js-rellax" data-rellax-speed="-.7"></div>
        <div className="features__bg" data-aos data-aos-duration="1000"><img className="features__pic" src="img/features-pic-1.svg" alt=""/></div>
      </div>

    </div>
  )
}

export default Feature