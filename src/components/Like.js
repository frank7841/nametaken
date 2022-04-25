import React from 'react'

const Like=()=> {
  return (
    <div>
        <div className="like">
        <div className="like__center center">
          <div className="like__container">
            <div className="like__wrap">
              <h2 className="like__title title" data-aos="animation-scale-x">Native-like Prototying<span className="title__color">.</span></h2>
              <div className="like__text" data-aos="animation-scale-x" data-aos-delay="150">
                <p>With Safetek, You will always be involved in the development process, our practise involves timely continous updates, and testing</p>
                <p>Help us make you digitally better.</p>
              </div>
              <div className="like__btn" data-aos="animation-scale-x" data-aos-delay="300"><button className="btn btn_purple">Call Us now</button></div>
            </div>
            <div className="like__preview" data-aos><img className="like__pic" src="img/hand-1.png" alt=""/></div>
            <div className="like__circle"></div>
            <div className="like__circles">
              <div className="like__circle"></div>
              <div className="like__circle js-rellax" data-rellax-speed="-1"></div>
              <div className="like__circle js-rellax" data-rellax-speed=".8"></div>
              <div className="like__circle"></div>
              <div className="like__circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Like