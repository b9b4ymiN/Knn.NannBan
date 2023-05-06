import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const HomePage = (props: { PageIndex: number }) => {
  const [homeBGClass, setHomeBGClass] = useState<string>("oneBgPage homeBG1");
  const [homePageIndex, setHomePageIndex] = useState<number>(0);

  useEffect(() => {
    setBackgroundHomePage(homePageIndex);

    //Setting auto move
    const interval = setInterval(() => {
      if (homePageIndex < 4) setHomePageIndex(homePageIndex + 1);
      else if (homePageIndex == 4) setHomePageIndex(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [homePageIndex]);

  const setBackgroundHomePage = (pageIndex) => {
    switch (pageIndex) {
      case 0:
        setHomeBGClass("oneBgPage homeBG1");
        break;
      case 1:
        setHomeBGClass("oneBgPage homeBG2");
        break;
      case 2:
        setHomeBGClass("oneBgPage homeBG3");
        break;
      case 3:
        setHomeBGClass("oneBgPage homeBG4");
        break;
      case 4:
        setHomeBGClass("oneBgPage homeBG5");
        break;
    }
  };
  return (
    <div
      id="home"
      className={
        props.PageIndex == 1
          ? "boxPage showPage tranFrom"
          : "boxPage hidePage tranFrom"
      }
    >
      <div className="listBgPage showTranForm">
        <div className={homeBGClass}></div>
      </div>
      <div
        className="contentPage"
        style={{ transform: "translate3d(0px, 0%, 0px)" }}
      >
        <h2 className="titlePage">เ พื่ อ ส ร้ า ง ชี วิ ต ที่ พ อ เ พี ย ง</h2>
        <div className="boxContentCtrl" style={{ width: "115px" }}>
          <a
            className={homePageIndex == 0 ? "action" : ""}
            onClick={() => setHomePageIndex(0)}
          >
            0
          </a>
          <a
            className={homePageIndex == 1 ? "action" : ""}
            onClick={() => setHomePageIndex(1)}
          >
            1
          </a>
          <a
            className={homePageIndex == 2 ? "action" : ""}
            onClick={() => setHomePageIndex(2)}
          >
            2
          </a>{" "}
          <a
            className={homePageIndex == 3 ? "action" : ""}
            onClick={() => setHomePageIndex(3)}
          >
            3
          </a>
          <a
            className={homePageIndex == 4 ? "action" : ""}
            onClick={() => setHomePageIndex(4)}
          >
            4
          </a>
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
        <Link className="btnEnter" href="?page=info">
          <img src="/assets/img/home/btnEnter.png" alt="" /> เข้าสู่เว็บไซต์
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
