import React from 'react'

const Nav=()=> {
  return (
    <div>
        <div className="header js-header" id="header">
          <div className="header__center center">
              <button className="header__burger js-header-burger"><span></span></button>
              <a className="header__logo" href="#">
                  <span>Safetek</span>
                  <img className=" header__pic" src="img/safetek-logo.svg" alt=""/>
             </a>
            <div className="header__wrap js-header-wrap">

                <nav className="header__nav">
                    <a className="header__item" href="/">Blog</a>
                    <a className="header__item" href="/">Discover</a>
                    <a className="header__item" href="/">Tour</a>
                        <div className="header__item js-header-item">
                            <a className="header__head js-header-head" href="#">Explore<svg className="icon icon-arrow-down">
                            <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                            </svg></a>
                        <div className="header__body js-header-body">
                            <div className="header__center center">
                            <div className="header__row">
                                <div className="header__col">
                                <div className="header__category">Products</div>
                                <div className="header__menu"><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/cup.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">Safetek Transport Assistant</div>
                                        <div className="header__text">Smart automation Transport System</div>
                                    </div>
                                    </a><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/camera.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">Traffic Lights Control</div>
                                        <div className="header__text">Nairobi Traffic Lights</div>
                                    </div>
                                    </a><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/calendar.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">Hospital ERP</div>
                                        <div className="header__text">Hospital Management Information System</div>
                                    </div>
                                    </a></div>
                                </div>
                                <div className="header__col">
                                <div className="header__category">Features</div>
                                <div className="header__menu"><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/chatbox.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">Support</div>
                                        <div className="header__text">24/7 Live Support</div>
                                    </div>
                                    </a><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/fill.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">In-house Developers</div>
                                        <div className="header__text">Quality Driven</div>
                                    </div>
                                    </a></div>
                                </div>
                                <div className="header__col">
                                <div className="header__category">Company</div>
                                <div className="header__menu"><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/clock.png" alt=""/></div>
                                            <div className="header__deetails">
                                        <div className="header__info">Safetek Team</div>
                                        <div className="header__text">See who’s behind the magic</div>
                                    </div>
                                    </a><a className="header__box" href="#">
                                    <div className="header__preview"><img className="header__pic" src="img/bell-flat.png" alt=""/></div>
                                    <div className="header__deetails">
                                        <div className="header__info">Safetek Design</div>
                                        <div className="header__text">What we’re working on</div>
                                    </div>
                                    </a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </nav>
              <div className="header__photo"><img className="header__pic" src="img/menu-pic.png" alt=""/></div>
            </div>
            <div className="header__search js-header-search"><button className="header__open js-header-open"><svg className="icon icon-search">
                  <use xlinkHref="img/sprite.svg#icon-search"></use>
                </svg></button>
              <div className="header__field"><input className="header__input" type="text" placeholder="Search ..."/></div>
            </div>
            {/* <a className="header__btn btn btn_pink" onClick={toggle}>Get Started</a> */}
          
          </div>
          <div className="header__bg js-header-bg"></div>
        </div>
    </div>
  )
}

export default Nav