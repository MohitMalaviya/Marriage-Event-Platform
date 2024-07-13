import React from "react";
import Header from "./Header";
import "../App.css";
import { haldi } from "./Homedata";
import { sangeet } from "./Homedata";
import { wedding } from "./Homedata";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Card } from "react-bootstrap";

// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto ">
        <div className="mthome">
          <div className="main_img">
            <img
              src="../image/mainimg.WEBP"
              alt=""
              className="mainimg w-100 h-[600px] mt-14 rounded-4"
            />
            <h1 className="imgtext">LUXURY EVENT PLANNERS</h1>
            <br></br>
            <h5 className="imgtextnext text-center">
              We design, plan, and manage your dream event from conception to
              execution.{" "}
            </h5>
          </div>
        </div>
      </div>

      {/* scrollbar */}
      <div className="container mx-auto slider">
        <div className="slider mt-16">
          <OwlCarousel className="owl-theme" loop margin={10} nav items="4">
            <div class="item">
              <img
                src="../image/bridewearsurat.jpeg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Bridal wear in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/d5.jpeg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Decorate in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/g4.jpg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Groom wear in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/photo.jpg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                photographers in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/bridewearsurat.jpeg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Bridal wear in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/d5.jpeg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Decorate in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/g4.jpg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                Groom wear in surat
              </h5>
            </div>
            <div class="item">
              <img
                src="../image/photo.jpg"
                className="sliderimg h-[300px] rounded-2xl"
              />
              <h5 className="mt-2 d-flex justify-content-center align-middle">
                photographers in surat
              </h5>
            </div>
          </OwlCarousel>
        </div>
      </div>

      {/* wedding categories */}
      <div className="container mx-auto">
        <div className="categories mx-auto">
          <h4>Wedding Categories</h4>
        </div>

        <div class="d-flex flex-wrap mt-6 justify-content-between">
          {/* 1  */}
          <div className="RainbowCategoryCard   bg-blue-100 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Venues</h4>
                <h6 className="mx-4">Banquet Halls,Lawns,/Farmhouse,R..</h6>
              </div>
              <div className="">
                <img src="../image/venues.webp" alt="" className="rainimg" />
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="RainbowCategoryCard   bg-pink-200 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Photographers</h4>
                <h6 className="mx-4">Photographers</h6>
              </div>
              <div className="">
                <img
                  src="../image/photographers.webp"
                  alt=""
                  className="rainimg"
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div class="d-flex flex-wrap mt-6 justify-content-between">
          {/* 3  */}
          <div className="RainbowCategoryCard   bg-pink-100 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Makeup </h4>
                <h6 className="mx-4">Bridal Makeup</h6>
              </div>
              <div className="">
                <img src="../image/makeup.webp" alt="" className="rainimg" />
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="RainbowCategoryCard   bg-green-100 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Pre Wedding Shoot</h4>
                <h6 className="mx-4">Pre Wedding Photographers</h6>
              </div>
              <div className="">
                <img
                  src="../image/prewedding.webp"
                  alt=""
                  className="rainimg"
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <div class="d-flex flex-wrap mt-6 justify-content-between">
          {/* 5  */}
          <div className="RainbowCategoryCard   bg-orange-200 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Planning & Decor</h4>
                <h6 className="mx-4">
                  Wedding Planners, Decorators, Small Fun..
                </h6>
              </div>
              <div className="">
                <img
                  src="../image/planning-decor.webp"
                  alt=""
                  className="rainimg"
                />
              </div>
            </div>
          </div>
          {/* 6 */}
          <div className="RainbowCategoryCard   bg-gray-200 h-auto">
            <div className="categories_name d-flex justify-content-between">
              <div className="mt-4">
                <h4 className="mx-4">Bridal Wear</h4>
                <h6 className="mx-4">
                  Bridal Lehengas, Kanjeevaram / Silk Sarees..
                </h6>
              </div>
              <div className="">
                <img
                  src="../image/bridal-wear.webp"
                  alt=""
                  className="rainimg"
                />
              </div>
            </div>
          </div>
        </div>
        <br></br>
      </div>

      {/* all function */}

      <div className="container mx-auto">
        <div className="categories mx-auto">
          <h4>All Functions </h4>
        </div>
      </div>
      <div className="container mx-auto mt-4 mb-2">
        {/* wedding */}

        <div className="row function_pic">
          <h4 className="text-pink-700 font-serif justify-content-center align-item-center d-flex w-100 mt-4">
            Wedding
          </h4>

          {wedding.map((item) => {
            return (
              <div className="col-3">
                <Card style={{ rem: 20 }} className="mt-3">
                  <Card.Img src={item.img} className="w-100 card_photography" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* haldi */}

        <div className="row function_pic">
          <h4 className="text-pink-700 font-serif justify-content-center align-item-center d-flex w-100 mt-4">
            Haldi
          </h4>

          {haldi.map((item) => {
            return (
              <div className="col-3">
                <Card style={{ rem: 20 }} className="mt-4">
                  <Card.Img src={item.img} className="w-100 card_photography" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* sangeet */}

        <div className="row function_pic">
          <h4 className="text-pink-700 font-serif justify-content-center align-item-center d-flex w-100 mt-4">
            sangeet
          </h4>

          {sangeet.map((item) => {
            return (
              <div className="col-3 mb-4">
                <Card style={{ rem: 20 }} className="mt-4">
                  <Card.Img src={item.img} className="w-100 card_photography" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* //footer */}
        
        <Footer />
      </div>
    </div>
  );
};
export default Home;
