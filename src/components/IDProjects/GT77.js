import cover from "../../visual/GT77/MSI_NB_Titan_GT77_photo02.png";

export default function GT77() {
  return (
    <div className="ProductFullPage">
      <div className="pageBox">
        <img src={cover} className="GT77cover"></img>
        <h1 className="description">
          The Titan GT77 represents t h e latest generation i n i t s product
          line, delivering peak gaming performance with cutting-edge graphics
          and processor power.
        </h1>
        <h1 className="description">
          In this project, I was tasked with redesigning the GT line and
          introducing a new design language to this beast. Apart from the
          concept development, I also had to pay attention to its
          engineerability to ensure it was producible with our engineers.
        </h1>
        <h1 className="extraInfo">
          Product of
          <a className="link">
            Micro-Star International Co., Ltd.
            (MSI)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </a>
          Year
          <a className="link">2021</a>
        </h1>
      </div>
    </div>
  );
}
