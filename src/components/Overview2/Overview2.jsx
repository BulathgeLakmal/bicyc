import React from "react";
import overviewImg from "../../images/Neon9.png";

const Overview = () => {
  return (
    <div id="Overview" className="pt-20">
      <div className="drop-shadow-2xl py-20">
        <h2 className="text-[2.5em] font-rubik font-bold text-center text-titlecolor pb-16">
          Overview
        </h2>
        <div className="flex lg:flex-row flex-col w-4/5 justify-between mx-auto items-center gap-20">
          <img className="lg:w-1/2" src={overviewImg} alt="" />
          <div className="lg:w-1/2 text-titlecolor bg-[#73f59bbd] py-10 px-10 rounded-lg font-mono">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-rubik">
                EXPERIENCE JUST FOR RIDER OFFER
              </h3>
            </div>
            <div>
              <p className="neon leading-loose text-semibold text-lg ">
                Pedalpay is a tokenized sports application based on web3. Users
                can purchase NFTs in the form of virtual bicycles which are
                linked to real riding activities. By riding around, users will
                earn our in-app token, which can either be used in-app or cashed
                out for profit. Our goal is to push our community toward a
                healthier lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
