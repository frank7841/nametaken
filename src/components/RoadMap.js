import React from 'react'

function RoadMap() {
  return (
    <div>
        <div class="roadmap">
        <div class="roadmap__center center">
          <div class="roadmap__head">
            <div class="roadmap__wrap" data-aos="animation-scale-y">
              <div class="roadmap__stage stage">Roadmap</div>
              <h2 class="roadmap__title title">All systems are a go<span class="title__color">.</span></h2>
              <div class="roadmap__info">Find out where we are on the path to achieving our Mission strategies.</div><select class="roadmap__select">
                <option>Current</option>
                <option>Current</option>
                <option>Current</option>
              </select>
            </div>
            <div class="roadmap__view" data-aos>
              <div class="roadmap__calendar"><img class="roadmap__pic" src="img/roadmap-pic.png" alt=""/></div>
              <div class="roadmap__bg"><img class="roadmap__pic js-parallax" data-scale="1.5" data-orientation="left" src="img/roadmap-pic-1.png" alt=""/></div>
            </div>
          </div>
          <div class="roadmap__body">
            <div class="roadmap__category">Earlier</div>
            <div class="roadmap__box">
              <div class="roadmap__top">
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Transport</div>
                    <div class="roadmap__year">2020</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Transport</div>
                    <div class="roadmap__year">2021</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Transport</div>
                    <div class="roadmap__year">2022</div>
                  </div>
                </div>
                <div class="roadmap__col">
                  <div class="roadmap__desc">
                    <div class="roadmap__category">Transport</div>
                    <div class="roadmap__year">2022</div>
                  </div>
                </div>
              </div>
              <div class="roadmap__lines">
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "66.66%"}} data-aos>Passenger Ticketting</div>
                </div>
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "78% "}} data-aos data-aos-delay="200">Cashless payment</div>
                </div>
                <div class="roadmap__line">
                  <div class="roadmap__progress" style={{width: "70%"}} data-aos data-aos-delay="400">Geo-Location Tracking</div>
                </div>
              </div>
            </div>
            <div class="roadmap__category">Later</div>
          </div>
        </div>
        <div class="roadmap__circles">
          <div class="roadmap__circle"></div>
          <div class="roadmap__circle"></div>
        </div>
        <div class="roadmap__preview" data-aos data-aos-duration="1000" data-aos-delay="300"><img class="roadmap__pic" src="img/roadmap-pic-2.svg" alt=""/></div>
      </div>
    </div>
  )
}

export default RoadMap