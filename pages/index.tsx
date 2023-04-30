import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from "next/link";

const IndexPage = () => (
  <>
    <div className="header">
      <Link className="logo" href={"/home"}>
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
      <h1 className="txtHeadEN ani300">
         A BETTER LIFE FOR OURS SOCIETY
      </h1>
      <span className="lineHead">|</span>
      <div className="txtHeadTH">
        <span>โคกหนองนา </span>อาจารย์<span> หนาน บาล</span>
      </div>
      <div className="headMenu ani300"></div>
      <div className="boxListIcon">
        <Link href={"#"} className="btnProject">
          project
        </Link>
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
      <div
        className="listBgPage"
        style={{ transform: "translate3d(0px, 0%, 0px)" }}
      >
        <div className="oneBgPage homeBG1"></div>
      </div>
      <div
        className="contentPage"
        style={{ transform: "translate3d(0px, 0%, 0px)" }}
      >
        <h2 className="titlePage">เ พื่ อ ส ร้ า ง ชี วิ ต ที่ พ อ เ พี ย ง</h2>
        <div className="boxContentCtrl"></div>
        <div className="boxDetailMain">
          <div className="boxDetail">
            <div className="bgBoxDetail"></div>
            <div className="bdrBoxDetail"></div>
            <div className="listDetail">
              <div className="detail" style={{marginTop : '15px'}}>
                
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

export default IndexPage;
