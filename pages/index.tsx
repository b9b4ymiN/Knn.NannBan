import Link from "next/link";
import { useEffect, useRef } from "react";
import { NextPage } from "next";
//Fancy
import Fancybox from "../components/FancyBox";

const IndexPage: NextPage = (props) => {
  return (
    <>
      <div className="header">
        <Link className="logo" href={"/"}>
          <img
            className="blue"
            src="../assets/img/logo_knn.png"
            alt="logo"
            style={{ opacity: 0 }}
          />
          <img
            className="write"
            src="../assets/img/logo_knn.png"
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
      <div
        id="home"
        className="boxPage"
        style={{
          transform: "translate3d(0px, 0%, 0px)",
          display: "block",
          height: "100%",
          overflow: "hidden",
          position: "fixed",
        }}
      >
        <div className="listBgPage showTranForm">
          <div className="oneBgPage homeBG1"></div>
        </div>
        <div
          className="contentPage"
          style={{ transform: "translate3d(0px, 0%, 0px)" }}
        >
          <h2 className="titlePage">
            เ พื่ อ ส ร้ า ง ชี วิ ต ที่ พ อ เ พี ย ง
          </h2>
          <div className="boxContentCtrl">
            <Fancybox
              options={{
                Carousel: {
                  infinite: true,
                },
                Navigation: false,
              }}
            >
              <a
                href="image-a.jpeg"
                data-fancybox="gallery"
                data-caption="Caption #1"
              >
                <img src="thumbnail-a.jpeg" />
              </a>

              <a
                href="image-b.jpeg"
                data-fancybox="gallery"
                data-caption="Caption #2"
              >
                <img src="thumbnail-b.jpeg" />
              </a>
            </Fancybox>
          </div>
          <div className="boxDetailMain">
            <div className="boxDetail">
              <div className="bgBoxDetail"></div>
              <div className="bdrBoxDetail"></div>
              <div className="listDetail">
                <div className="detail" style={{ marginTop: "15px" }}>
                  มุ่งมั่นให้ทุกคนสามารถพึ่งพาตัวเองได้
                  <br />
                  ด้วยปรัชญาเศรษฐกิจพอเพียง
                </div>
              </div>
            </div>
          </div>
          <Link className="btnEnter" href="#/about">
            <img src="/assets/img/home/btnEnter.png" alt="" /> เข้าสู่เว็บไซต์
          </Link>
        </div>
      </div>
      {/* End Home */}
    </>
  );
};

export default IndexPage;
