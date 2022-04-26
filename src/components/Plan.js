import React from 'react'

const Plan=()=> {
  return (
    <div>
              <div className="plan js-plan">
        <div className="plan__center center">
          <div className="plan__head" data-aos="animation-scale-y">
            <div className="plan__stage stage">Join The Revolution</div>
            <h2 className="plan__title title">Get the  <span className="title__color">Right Plan.</span></h2>
            <div className="plan__info info">Flexible pricing options for Individuals and Corprates.</div><label className="switch"><input className="switch__input" type="checkbox" checked/><span className="switch__flex"><span className="switch__yearly">Billed Yearly</span><span className="switch__box"></span><span className="switch__monthly">Billed Monthly</span></span></label>
            <div className="plan__variants"><select className="plan__select js-plan-select">
                <option> Automated Transport </option>
                <option>HIS</option>
                <option>Software</option>
              </select></div>
          </div>
          <div className="plan__body">
            <div className="plan__item js-plan-item" data-aos="animation-translate-y">
              <div className="plan__star"><svg className="icon icon-star">
                  <use xlinkHref="img/sprite.svg#icon-star"></use>
                </svg></div>
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-1.svg" alt=""/></div>
                <div className="plan__text"> Saccos</div>
              </div>
              <h3 className="plan__title title title_sm">Automated Transport</h3>
              <div className="plan__price"><span className="plan__money">Ksh 10,000.00</span> /month</div>
              <ul className="plan__list">
                <li>Vehicle geo-location Tracking and Queueing</li>
                <li>passenger Ticketting</li>
                <li>Parcel's Application</li>
                <li>Dashboard Analytics</li>
              </ul><a className="plan__btn btn btn_white  " href="tel:+254790943918" data-effect="mfp-zoom-in">Call Us Now</a>
            </div>
            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="200">
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/></div>
                <div className="plan__text">Hospitals</div>
              </div>
              <h3 className="plan__title title title_sm">Hospital ERP</h3>
              <div className="plan__price"><span className="plan__money">Ksh 10,000</span> /month</div>
              <ul className="plan__list">
                <li>In-Patient and Out-Patient</li>
                <li>Comprehensive Report generation</li>
                <li>telemedicine</li>
                <li>Pharmacy and Store Iventory</li>
              </ul><a className="plan__btn btn btn_pink  " href="tel:+254790943918" data-effect="mfp-zoom-in">Call Us Now</a>
            </div>
            <div className="plan__item js-plan-item" data-aos="animation-translate-y" data-aos-delay="400">
              <div className="plan__category">
                <div className="plan__icon"><img className="plan__pic" src="img/smile-2.svg" alt=""/></div>
                <div className="plan__text">Corporates</div>
              </div>
              <h3 className="plan__title title title_sm">Software Solution</h3>
              <div className="plan__price"><span className="plan__money">Ksh 10,000</span> /neg</div>
              <ul className="plan__list">
                <li>What Do you need ?</li>
                <li>FinTech</li>
                <li>EduTech</li>
                <li>Digitalisation</li>
              </ul><a className="plan__btn btn btn_purple  " href="tel:+254790943918" data-effect="mfp-zoom-in">Call Us Now</a>
            </div>
          </div>
        </div>
        <div className="plan__circle js-rellax" data-rellax-speed="-1"></div>
      </div>
    </div>
  )
}

export default Plan