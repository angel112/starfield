import Spline from "@splinetool/react-spline";

// import { Spline } from "react-spline";
const PUBLIC_URL =
  "https://my.spline.design/wavessss-616513601f208a9557de9f591b92b4e3/";

const HomeComp = () => {
  return (
    <main className="main">
      <div className="section-1">
        <div className="containers">
          <h1 className="text-w">
            Decentralized apps for the decentralized web.
          </h1>
          <div className="text-s">
            A laboratory empowering the consumers by building truly transparent
            and decentralized products.
          </div>
        </div>
      </div>
      <div className="anim">
        <iframe
          src="https://my.spline.design/waves-eff41ae23b0d3e1918f6ef1e332cf28d/"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </main>
  );
};

export default HomeComp;
