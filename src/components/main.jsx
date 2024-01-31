import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero ">
        <div className="card ">
          <img
            className="card-img img-fluid"
            src="https://c1.wallpaperflare.com/preview/805/821/91/kiosk-mall-empty-dark.jpg"
            alt="Card"
            // height={100}
            style={{  height: "650px" }}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="my-texts1">New Season Arrivals</h5>
              <p className="my-texts2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
