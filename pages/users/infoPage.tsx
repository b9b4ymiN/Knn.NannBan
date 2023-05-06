import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const InfoPage = (props: { PageIndex: number }) => {
  const [homeBGClass, setHomeBGClass] = useState<string>(
    "oneBgPage homeBG1 tranFrom"
  );
  const [homePageIndex, setHomePageIndex] = useState<number>(0);

  useEffect(() => {}, [homePageIndex]);

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
      id="about"
      className={
        props.PageIndex == 2
          ? "boxPage showPage tranFrom"
          : "boxPage hidePage tranFrom"
      }
    ></div>
  );
};

export default InfoPage;
