import "./Section.sass";
import img1 from "./img1/Haxarcin.jpg";
import img3 from "./img1/hin israyeli tachar.webp";
import img4 from "./img1/garni.jpg";
import img5 from "./img1/solomons_temple.webp";
import img7 from "./img1/Tatev.jpeg";
import img8 from "./img1/Xor Virap.jpg";

function Section() {
  return (
    <section className="section0">
      <div className="titl">
        <h1>ՀՆԱԳՈՒՅՆ ԵՎ ՀԻՆ ՏԱՃԱՐՆԵՐԻ ՄԱՍԻՆ ՀԱՄԱՌՈՏ ՆԿԱՐԱԳՐՈՒԹՅՈՒՆ</h1>
      </div>
      <div className="photos">
        <div className="photo">
          <img className="img1" src={img1} alt="" />
          <div className="text">
            <h1>ՀԱՂԱՐԾՆԻ <br/> վանական համալիր</h1>
          </div>
        </div>
        <div className="photo">
          <img className="img3" src={img3} alt="" />
          <div className="text">
            <h1>ՀԻՆ ԻՍՐԱՅԵԼԻ <br/> խորանը</h1>
          </div>
        </div>
        <div className="photo">
          <img className="img4" src={img4} alt="" />
          <div className="text">
            <h1>ԳԱՌՆՈՒ <br/> հեթանոսական տաճար</h1>
          </div>
        </div>
        <div className="photo">
          <img className="img5" src={img5} alt="" />
          <div className="text">
            <h1>ՍՈՂՈՄՈՆԻ <br/> տաճարը</h1>
          </div>
        </div>
        <div className="photo">
          <img className="img7" src={img7} alt="" />
          <div className="text">
            <h1>ՏԱԹԵՎԻ <br/> վանք</h1>
          </div>
        </div>
        <div className="photo">
          <img className="img8" src={img8} alt="" />
          <div className="text">
            <h1>ԽՈՐ-ՎԻՐԱՊԻ <br/> վանք</h1>
          </div>
        </div>
      </div>
      {/* <div className='pages'>
                <a href='#'>2</a>
                <a href='#'>3</a>
                <a href='#'>4</a>
                <a href='component'>5</a>
            </div> */}
    </section>
  );
}

export default Section;
