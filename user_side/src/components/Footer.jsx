import React from "react";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <>
        <Container fluid> 
          <div className="footer  mt-4">
            <div className="row">
              <div className="col-1">
                <img
                  src="../image/logo2.png"
                  alt=""
                  className="h-[100px] w-[50px] footer_logo d-flex"
                />
              </div>
              <div className="col-11">
                <h3 className="d-flex align-items-center mt-8 -ms-8 head_footer">
                  Wedding Planner
                </h3>
              </div>
            </div>

            <div className="mt-0 ms-8 text-gray-800 font-bold">
              Helps plan your wedding like a loved one
            </div>
            <div className="mt-2 ms-8 me-8 text-muted">
              MV wedding is India’s most loved Wedding Planning website! Check
              prices, verified reviews and book best wedding photographers,
              bridal makeup artists, wedding venues, decorators, and all other
              wedding vendors at guaranteed best prices. Get loads of latest
              wedding ideas & inspiration - bridal fashion, makeup and skincare
              tips, wedding planning tips, bachelorette & honeymoon ideas from
              India's largest wedding community & real weddings. MVwedding is
              proud to have been the official wedding planner of celebrities
              like Yuvraj Singh & Bhuvneshwar Kumar. We love what we do, and
              that's how we help plan your wedding like a loved one!
            </div>

            <button className="mt-4 ms-8 rounded-3xl font-bold text-white h-12 w-40 footer_hirebtn">
              Hire a vendor
            </button>
            <button className="mt-4 ms-8 rounded-3xl font-bold  h-12 w-44 footer_regbtn">
              Register as a vendor
            </button>

            <hr className="text-white" />

            <h4 className="mt-4 ms-8 font-bold">Contact Us</h4>

            <div className="row">
              <div className="col-6 mt-2 ">
                <div className="ms-14">
                  If you are getting married & need help::
                </div>
                <button className="mt-3 ms-16 footer_carebtn rounded-3xl h-12 w-60">
                  <img
                    src="../image/message.png"
                    className="h-8 d-flex justify-center align-middle -mt-4 ms-2 absolute"
                    alt=""
                  />
                </button>
                <br></br>
                <div className="ms-28 -mt-9 text_message  ">
                  care@MVwedding.com
                </div>
                <button className="mt-4 ms-16 footer_carebtn rounded-3xl h-10 w-40">
                  <img
                    src="../image/phone.png"
                    className="h-6 d-flex justify-center align-middle mt-1 ms-3"
                    alt=""
                  />
                </button>
                <div className="ms-28 -mt-8 text_message mb-6 ">9724057127</div>
              </div>
              <div className="col-6 mt-2 ">
                <div className="ms-14">
                  If you are getting married & need help::
                </div>
                <button className="mt-3 ms-16 footer_carebtn rounded-3xl h-12 w-60">
                  <img
                    src="../image/message.png"
                    className="h-8 d-flex justify-center align-middle -mt-4 ms-2 absolute"
                    alt=""
                  />
                </button>
                <br></br>
                <div className="ms-28 -mt-9 text_message  ">
                  care@MVwedding.com
                </div>
                <button className="mt-4 ms-16 footer_carebtn rounded-3xl h-10 w-40">
                  <img
                    src="../image/phone.png"
                    className="h-6 d-flex justify-center align-middle mt-1 ms-3"
                    alt=""
                  />
                </button>
                <div className="ms-28 -mt-8 text_message mb-6 ">9724057127</div>
              </div>
            </div>

            <hr className="text-white" />
          </div>
        </Container>

      <div className="container-fluid mt-4 wedding_screen">
        <div className="row">
          <div className="col-6 d-flex justify-content-center align-items-center">
            <div className="img">
              <img src="../image/weddingscreen.png" alt="" className="" />
            </div>
          </div>
          <div className="col-6">
            <h3 className="mt-20 screen_heading">
              Create Your Wedding Website For Free
            </h3>
            <div className="text-muted mt-3 screen_text me-6">
              Share your wedding story and itinerary with your guests through a
              personalized wedding website, for free. Create your wedding
              itinerary, send out wedding invitations, add albums, manage guests
              and more, in a hassle-free manner.
            </div>
            <button className="btn_website mt-4 h-12 w-44">
              Create Your Website
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-4 mx-auto">
        <h3 className="d-flex justify-center align-middle">
          The Ultimate Wedding Planning Blog
        </h3>
        <h6 className="d-flex justify-center align-middle mt-4 text-muted">
          From latest fashion, wedding inspiration and trending ideas to expert
          advice and tips, the{" "}
        </h6>
        <h6 className="d-flex justify-center align-middle text-muted">
          {" "}
          MVwedding fairy has you covered. Making wedding planning easy.
        </h6>

        <div className="row mt-4">
          <div className="col-4">
            <img
              src="../image/footerimg1.png"
              alt=""
              className="h-[300px] w-[400px] "
            />
            <div className="d-flex justify-center align-middle mt-2 text-gray-500">
              Bridal wear{" "}
            </div>
            <div className="d-flex justify-center align-middle mt-2">
              Mayur Girotra's Silk Lehangas Are A Sight To Behold!.{" "}
            </div>
          </div>

          <div className="col-4">
            <img
              src="../image/footerimg2.png"
              alt=""
              className="h-[300px] w-[400px] "
            />
            <div className="d-flex justify-center align-middle mt-2 text-gray-500">
              Other Wedding Services
            </div>
            <div className="d-flex justify-center align-middle mt-2">
              Unique Ways Of using couple in Your Weddings!.{" "}
            </div>
          </div>

          <div className="col-4">
            <img
              src="../image/footerimg3.png"
              alt=""
              className="h-[300px] w-[400px] "
            />
            <div className="d-flex justify-center align-middle mt-2 text-gray-500">
              Bridal wear{" "}
            </div>
            <div className="d-flex justify-center align-middle mt-2">
              Mayur Girotra's Silk Lehangas Are A Sight To Behold!.{" "}
            </div>
          </div>
        </div>

        <div className="d-flex justify-center align-middle">
          <button className="btn_website mt-4 h-12 w-44">View All Blogs</button>
        </div>
      </div>

      <div className="container mt-4 photogallery_footer">
        <h3 className="d-flex justify-center align-middle">
          Wedding Photo Gallery
        </h3>
        <div className="d-flex justify-center align-middle ms-40 me-40 mt-2 text-muted">
          Explore 1000+ wedding photos and stay up-to-date with the latest
          wedding fashion and{" "}
        </div>
        <div className="d-flex justify-center align-middle ms-40 me-40 text-muted">
          trends- from bridal hairstyles, mehendi designs to bridal lehengas and
          wedding decoration{" "}
        </div>
        <div className="d-flex justify-center align-middle ms-40 me-40 text-muted">
          ideas.
        </div>

        <div className="row mt-4">
          <div className="col-2">
            <img src="../image/mehendi.jpg" alt="" className="rounded-lg" />
            <div className="d-flex justify-center align-middle mt-2">
              Mehendi designs
            </div>
          </div>

          <div className="col-2">
            <img
              src="../image/bridal-lehenga.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="d-flex justify-center align-middle mt-2">
              Bridal Lehengas
            </div>
          </div>

          <div className="col-2">
            <img
              src="../image/bridal-makeup-photos.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="d-flex justify-center align-middle mt-2">
              Bridal Makeup
            </div>
          </div>

          <div className="col-2">
            <img
              src="../image/bridal-jewellery.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="d-flex justify-center align-middle mt-2">
              Bridal Jewellery
            </div>
          </div>

          <div className="col-2">
            <img
              src="../image/south-indian-weddings.jpg"
              alt=""
              className="rounded-lg"
            />
            <div className="d-flex justify-center align-middle mt-2">
              South Indian Weddings
            </div>
          </div>

          <div className="col-2">
            <img src="../image/haldi-ideas.jpg" alt="" className="rounded-lg" />
            <div className="d-flex justify-center align-middle mt-2 mb-6">
              Haldi Idias
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="font-bold fs-6">Plan Your Wedding</div>
            <div className="text-muted mt-2 text-sm">
              <div className="mt-1 ">Create Wedding Website</div>
              <div className="mt-1 ">Wedding Cjecklist</div>
              <div className="mt-1 ">Wedding Vendors</div>
              <div className="mt-1 ">Tohfa</div>
              <div className="mt-1">Contact Our Team</div>
            </div>
          </div>

          <div className="col-3">
            <div className="font-bold fs-6">Wedding Ideas</div>
            <div className="text-muted mt-2 text-sm">
              <div className="mt-1 ">Pre Wedding photos</div>
              <div className="mt-1 ">Destination Wedding</div>
              <div className="mt-1 ">Decore Ideas</div>
              <div className="mt-1 ">Bridal Inspirations</div>
              <div className="mt-1 ">Wedding Trends</div>
              <div className="mt-1"> Wedding Photography</div>
              <div className="mt-1"> Bridal Makeup</div>
            </div>
          </div>

          <div className="col-3">
            <div className="font-bold fs-6">Wedding Photos</div>
            <div className="text-muted mt-2 text-sm">
              <div className="mt-1 ">Jewellery</div>
              <div className="mt-1 ">Makeup & Hair</div>
              <div className="mt-1 ">Decore</div>
              <div className="mt-1 ">Mehendi Designs</div>
              <div className="mt-1 ">Invitations</div>
              <div className="mt-1"> Wedding Cakes</div>
              <div className="mt-1"> Bridal Wear</div>
              <div className="mt-1"> Venues</div>
            </div>
          </div>

          <div className="col-3">
            <div className="font-bold fs-6">Quick Links</div>
            <div className="text-muted mt-2 text-sm">
              <div className="mt-1 ">About MVwedding</div>
              <div className="mt-1 ">Download MVwedding App</div>
              <div className="mt-1 ">Blog</div>
              <div className="mt-1 "> FAQs</div>
              <div className="mt-1 ">Invitations</div>
              <div className="mt-1">Privacy Olicy</div>
              <div className="mt-1"> Conceirge Services</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <div className="mt-8 ms-24 text-muted">
            Termrs & Conditions | Sitemap | Privacy Policy
          </div>
        </div>
        <div className="col-6">
          <div className="mt-8">
            Copyright 2020 - 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
