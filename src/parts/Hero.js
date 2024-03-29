import React from "react";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "elements/Button";
import numberFormat from "utils/formatNumber";
import Fade from 'react-reveal/Fade';

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <>
      <Fade bottom>
        <section className="container pt-4">
          <div class="row align-items-center">
            <div class="col-auto pr-5" style={{ width: 530 }}>
              <h1 class="font-weight-bold line-height-1 mb-3">
                Forget Busy Work, <br />
                Start Next Vacation
              </h1>
              <p
                class="mb-4 font-weight-light text-gray-500 w-75"
                style={{ lineHeight: "170%" }}
              >
                We provide what you need to enjoy your holiday with family. Time
                to make another memorable moments.
              </p>
              <Button
                className="btn px-5"
                hasShadow
                isPrimary
                onClick={showMostPicked}
              >
                Show Me Now
              </Button>
              <div class="row" style={{ marginTop: "80px" }}>
                <div class="col-auto" style={{ marginRight: 35 }}>
                  <img
                    width="36"
                    height="36"
                    src={IconTraveler}
                    alt={`${props.data.travelers} Travelers`}
                  />
                  <h6 class="mt-3">
                    {numberFormat(props.data.travelers)}{" "}
                    <span class="text-gray-500 font-weight-light">
                      travelers
                    </span>
                  </h6>
                </div>
                <div class="col-auto" style={{ marginRight: 35 }}>
                  <img
                    width="36"
                    height="36"
                    src={IconTreasure}
                    alt={`${props.data.treasures} Treasures`}
                  />
                  <h6 class="mt-3">
                    {numberFormat(props.data.treasures)}{" "}
                    <span class="text-gray-500 font-weight-light">
                      treasures
                    </span>
                  </h6>
                </div>
                <div class="col-auto">
                  <img
                    width="36"
                    height="36"
                    src={IconCities}
                    alt={`${props.data.travelers} Cities`}
                  />
                  <h6 class="mt-3">
                    {numberFormat(props.data.cities)}{" "}
                    <span class="text-gray-500 font-weight-light">cities</span>
                  </h6>
                </div>
              </div>
            </div>
            <div class="col-6 pl-5">
              <div style={{ width: 520, height: 410 }}>
                <img
                  src={ImageHero}
                  alt="Room with couches"
                  className="img-fluid position-absolute"
                  style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                />
                <img
                  src={ImageHeroFrame}
                  alt="Room with couches frame"
                  className="img-fluid position-absolute"
                  style={{ margin: "0 -15px -15px 0" }}
                />
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
}
