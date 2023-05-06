import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
//Scroll
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
//Page
import HomePage from "./users/homePage";
import InfoPage from "./users/infoPage";

const IndexPage: NextPage = (props) => {
  const router = useRouter();
  const [PageIndex, setPageIndex] = useState<number>(1);
  /*
    Page Index 
    1 => Home Page
    2 => Map Landmark
    3 => Picute Land Mark
    4 => Information Tree
    5 => Section
    6 => Map
    7 => Contact
  */

  useEffect(() => {
    /*if (router.query.page != undefined) {
      console.log(router.query);
      setPageIndex(2);
    } else {
      console.log("home");
      setPageIndex(1);
    }*/
  }, [PageIndex, router.query]); // run when scroll direction changes

  return (
    <ReactScrollWheelHandler
      upHandler={(e) => {
        if (PageIndex == 2) setPageIndex(1);
      }}
      downHandler={(e) => {
        if (PageIndex == 1) setPageIndex(2);
      }}
    >
      <div className="header">
        <Link className="logo" href={"/"}>
          <img
            className="blue"
            src="../assets/img/knn.bann_logo2.png"
            alt="logo"
            style={{ opacity: 0 }}
          />
          <img
            className="write"
            src="../assets/img/knn.bann_logo2.png"
            alt="logo write"
            style={{ opacity: 1 }}
          ></img>
        </Link>
        <h1 className="txtHeadEN ani300">A BETTER LIFE FOR OUR SOCIETY</h1>
        <span className="lineHead">|</span>
        <div className="txtHeadTH">
          <span>โคกหนองนา </span>อาจารย์<span> หนาน บาล</span>
        </div>
        <div className="headMenu ani300"></div>
        <div className="boxListIcon">
          <Link href={"#"} className="btnSitemap">
            sitmap
          </Link>
          <Link className="btnHome" href="#/home">
            home
          </Link>
        </div>
      </div>
      {/* Home */}
      <HomePage PageIndex={PageIndex} />
      {/* End Home */}

      {/* Info */}
      <InfoPage PageIndex={PageIndex} />
      {/* Info Home */}
    </ReactScrollWheelHandler>
  );
};

export default IndexPage;
