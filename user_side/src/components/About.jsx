import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import * as mdb from 'mdb-ui-kit'; 
import { Input } from 'mdb-ui-kit'; 
import teamdata from "./Aboutdata";

function About() {
  return (
    <div>
      <Header />

      <div className="conatiner mx-auto mt-8">
      <div className="mthome">

        <div className="real_heading d-flex justify-content-center">
          <h3 className="font-semibold text-gray-600">Real Weddings</h3>
        </div>
      </div>
      </div>


      {/* 1 */}
      <div className="container mx-auto mt-4">
        <div className="row mx-auto ms-0">
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/realwedding1.jpg"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>

              <div className="col-7">
                <h5 className="d-flex text-muted mt-4 font-bold">
                  Shivani weds karan Grand indain Wedding Villa In Jaipur
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  WEDDING VENUE The couple chose the stunning palatial property
                  The Leela Palace Jaipur for their dream wedding. The hotel's
                  pristine white and blue architecture and "
                </h6>
              </div>
            </div>
          </div>
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/realwedding2.jpg"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>
              <div className="col-7">
                <h5 className="ms-0 d-flex text-muted mt-4 font-bold">
                  Love Story-One Of A Kind!
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  How we met: &nbsp;We somehow got in touch with one another
                  through a college project in the year 2012 in New Delhi. He
                  was from a different college, so we talked on WhatsApp a lot,
                  but met rarely.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="container mx-auto mt-8">
        <div className="row mx-auto ms-0">
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/realwedding3.jpg"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>

              <div className="col-7">
                <h5 className="d-flex text-muted mt-4 font-bold">
                  Rena & Malik's Wedding
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  From the Bride - 2009 - Ssthit and I had just shifted to Delhi
                  from our respective home towns for college. We were both in
                  different colleges. One fine day, we met at my
                </h6>
              </div>
            </div>
          </div>
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/realwedding4.jpg"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>
              <div className="col-7">
                <h5 className="ms-0 d-flex text-muted mt-4 font-bold">
                  Shreyaa & Keval's Wedding In Taj Lands End, Mumbai
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  Introduced by a common family friend, they started talking to
                  each other and finally one day luck made them meet in Bombay
                  which happened to be their first date. Salman Shama was bowled
                  over by Sar
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="container mx-auto mt-8">
        <div className="row mx-auto ms-0">
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/realwedding5.jpg"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>

              <div className="col-7">
                <h5 className="d-flex text-muted mt-4 font-bold">
                  Love Story-One Of A Kind!
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  How we met: &nbsp;We somehow got in touch with one another
                  through a college project in the year 2012 in New Delhi. He
                  was from a different college, so we talked on WhatsApp a lot,
                  but met rarely.{" "}
                </h6>
              </div>
            </div>
          </div>
          <div className="col w-50 border border-solid-1 me-4 p-0 ">
            <div className="row">
              <div className="col-5">
                <img
                  src="../image/weedingmain.png"
                  alt=""
                  className="w-[240px]  h-[270px] realwedding_pic"
                />
              </div>
              <div className="col-7">
                <h5 className="ms-0 d-flex text-muted mt-4 font-bold">
                  Yash weds Hetvi's Grand indain Wedding Villa In Jaipur
                </h5>
                <h6 className="d-flex text-muted me-2 mt-4">
                  WEDDING VENUE The couple chose the stunning palatial property
                  The Leela Palace Jaipur for their dream wedding. The hotel's
                  pristine white and blue architecture and "{" "}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto">
        <div className="row">
          {teamdata.map((item) => {
            return (
              <div className="col-3">
                <Card style={{ width: "18rem" }} className="mt-4">
                  <Card.Img variant="top" src={item.img} className="w-100 card_team" />
                  <Card.Body className="">
                    <Card.Title className="  d-flex justify-content-center mt-0 font-bold fs-4">
                      {item.name}
                    </Card.Title>
                    <Card.Text className=" d-flex justify-content-center text-muted mt-0 font-bold">
                      {item.detail}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div> */}

      
      {/* team heading */}
      <div className="conatiner mx-auto mt-8">
        <div className="real_heading d-flex justify-content-center">
          <h3 className="font-semibold text-gray-600">Our Team</h3>
        </div>
      </div>


      {/* team */} 
          <div className="container mx-auto">
          <div id="carouselExampleControls" class="carousel slide text-center carousel-dark" data-mdb-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img className=" rounded-circle shadow-1-strong mb-4 ml-[500px]"
                src="../image/team1.jpg" alt="avatar"
                style={{width:280,height:250}}/>
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">

                  <h5 class="mb-3">  Akshay Kumar</h5>
                  <p>Founder CEO</p>
                  <p class="text-muted">
                    <i class="fas fa-quote-left pe-2"></i>
                    Experienced Wedding Planner with a demonstrated history of working in the entertainment industry. Strong operations professional skilled in Customer Service, Advertising, Business Development, Marketing Strategy, and Event Management.
                  </p>
                </div>
              </div>
            <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="fas fa-star fa-sm"></i></li>
              <li><i class="far fa-star fa-sm"></i></li>
            </ul>
          </div>
        <div class="carousel-item">
        <img className="rounded-circle shadow-1-strong mb-4 ml-[500px]"
                src="../image/team2.jpg" alt="avatar"
                style={{width:280,height:250}}/>
          <div class="row d-flex justify-content-center">
            <div class="col-lg-8">
              <h5 class="mb-3"> Jay Shah</h5>
              <p>Decore design Execution</p>
              <p class="text-muted">
                <i class="fas fa-quote-left pe-2"></i>
                Technology has a big role to play in experience design, from helping you to gather insights at scale from your target audience, to making sense of mountains of data to identify the actions you need to take to design the perfect experience.
              </p>
            </div>
          </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
    <div class="carousel-item">
    <img className=" rounded-circle shadow-1-strong mb-4 ml-[500px]"
                src="../image/team3.png" alt="avatar"
                style={{width:280,height:250}}/>
      <div class="row d-flex justify-content-center">
        <div class="col-lg-8">
          <h5 class="mb-3">Yashvi Kapoor</h5>
          <p>Expert for photography</p>
          <p class="text-muted">
            <i class="fas fa-quote-left pe-2"></i>
            For some people, a career in photography is their dream job. After all who doesn’t want the opportunity to take photos in a sector that they enjoy. For most photographers, their career is a learning experience that never stops. Whether that is photographically, personally, or even on the business side of things, they constantly have to learn from their experiences, develop, and become better and more efficient.
          </p>
        </div>
      </div>
      <ul class="list-unstyled d-flex justify-content-center text-warning mb-0">
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="fas fa-star fa-sm"></i></li>
        <li><i class="far fa-star fa-sm"></i></li>
      </ul>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls"
    data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      </div>   


      
               
        


        {/* bride love */}

        <div className="conatiner mx-auto mt-8">
        <div className="real_heading d-flex justify-content-center">
          <h3 className="font-semibold text-gray-700">Why Brides Love MVwedding</h3>
        </div>
      </div>

          <div className="container mx-auto mt-4">
            <div className="row">
            {/* {1} */}
              <div className="col-4">
              <div className="cards_bridelove">
                <div className="img d-flex justify-content-center">
                <img src="../image/photo23.webp" alt="" className="rounded-circle w-[100px] h-[90px]"/>

                </div>
              <div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-5">Tanvi maik</div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-6">Bride</div>
                <div className="ps-2">We loved the pre-wed shoot planned by Shaadiwish.
                 Such royal location, gorgeous outfits, fabulous artists & photographers, really helped us to create beautiful memories for lifetime.</div>
              </div>
              </div>

              </div>

            {/* 2 */}
            <div className="col-4">
              <div className="cards_bridelove">
                <div className="img d-flex justify-content-center">
                <img src="../image/photo29.jpg" alt="" className="rounded-circle w-[100px] h-[90px]"/>

                </div>
              <div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-5">Vrasha Singhal</div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-6">Bride</div>
                <div className="ps-2">Weddings are memories for a lifetime and ShaadiWish filled that bit more “life” in it. I planned my wedding through ShaadiWish website and their App.</div>
              </div>
              </div>

              </div>

              {/* 3 */}
              <div className="col-4">
              <div className="cards_bridelove">
                <div className="img d-flex justify-content-center">
                <img src="../image/photo19.jpg" alt="" className="rounded-circle w-[100px] h-[90px]"/>

                </div>
              <div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-5">Vishva Malik</div>
              <div className="text-muted d-flex justify-content-center mt-2 fs-6">Bride</div>
                <div className="ps-2">Simply, your app is just amazing and helped me out to organise my wedding perfectly the way I always wanted.</div>
              </div>
              </div>

              </div>
            </div>
            <Footer/>
          </div>


    </div>

  );
}

export default About;
