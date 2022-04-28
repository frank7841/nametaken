import React from 'react'

const Footer=()=> {
  return (
    <div>
        <div class="footer js-footer">
        <div class="footer__center center">
          <div class="footer__row">
            <div class="footer__col"><a class="footer__logo" href="#"><img className=" footer__pic" src="img/safetek-logo.svg" alt=""/></a></div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Company<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">About us</a><a class="footer__link" href="#">Jobs</a><a class="footer__link" href="#">Press</a><a class="footer__link" href="#">Blog</a></div>
            </div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Support<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">Contact us</a><a class="footer__link" href="#">Cookies</a><a class="footer__link" href="#">Privacy & terms</a><a class="footer__link" href="#">Sitemap</a></div>
            </div>
            <div class="footer__col js-footer-col">
              <div class="footer__category js-footer-category">Community<svg class="icon icon-arrow-down">
                  <use xlinkHref="img/sprite.svg#icon-arrow-down"></use>
                </svg></div>
              <div class="footer__menu js-footer-menu"><a class="footer__link" href="#">Developers</a>
              <a class="footer__link" href="#">Designers</a><a class="footer__link" href="#">Forum</a>
              <a class="footer__link" href="#">Blog</a>
              </div>
            </div>
          </div>
          <div class="footer__bottom"><a class="footer__company" href="/" target="_blank">
              {/* <img class="footer__pic" src="img/ui8.svg" alt=""/> */}
              </a>
            <div class="footer__copyright">© 2022, safetek systems.</div><a class="footer__scroll js-link-scroll" href="#header">
              <div class="footer__icon"><img class="footer__pic" src="img/scroll.svg" alt=""/></div>
              <div class="footer__text">Back to top</div>
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer