import React from 'react'

const  Access=()=> {
  return (
    <div>
              <div className="access">
        <div className="access__center center">
          <div className="access__view" data-aos data-aos-delay="300">
            <div className="access__preview"><img className="access__pic" src="img/access-pic-2.png" alt=""/></div>
            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="up" src="img/access-pic-1.png" alt=""/></div>
            <div className="access__preview"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="down" src="img/main-pic-2.png" alt=""/></div>
          </div>
          <div className="access__wrap" data-aos="animation-scale-y">
            <div className="access__info">Ready to get started? <br/>Sign up with your email</div>
            <form className="access__form">
              <div className="access__field"><input className="access__input" type="email" placeholder="Email address"/>
                <div className="access__icon"><img className="access__pic" src="img/sending-mail.svg" alt=""/></div>
              </div><button className="access__btn btn btn_purple" type="submit">Get Started</button>
            </form>
          </div>
        </div>
        <div className="access__circles">
          <div className="access__circle" data-aos data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="100" data-aos-offset="300"></div>
          <div className="access__circle" data-aos data-aos-delay="200" data-aos-offset="300"></div>
        </div>
        <div className="access__clouds">
          <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/cloud.png" alt=""/></div>
          <div className="access__cloud"><img className="access__pic js-parallax" data-scale="1.5" data-orientation="right" src="img/cloud.png" alt=""/></div>
        </div>
        <div className="access__balls">
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="-1"></div>
          <div className="access__ball"></div>
          <div className="access__ball js-rellax" data-rellax-speed="1"></div>
        </div>
      </div>

    </div>
  )
}

export default Access