import "./Section.sass";
import img from "./img/interior-khor-virap-ancient-monastery-located-ararat-valley-armenia_130291-3898.avif";
import img1 from "./img/3.jpg";
import img3 from "./img/ChatGPT Image 28 авг. 2025 г., 15_17_13.png";

function Section() {
  return (
    <section className="section00">
      <div className="text">
        <h1>Խոր Վիրապ</h1>
        <em>Վայրը և նշանակությունը</em>
        <p>
          Խոր Վիրապի վանքը գտնվում է Հայաստանի Հանրապետության Արարատի մարզում՝
          Արարատյան դաշտի հարավային մասում, Արաքս գետի ձախ ափին, Փոքր Վեդի գյուղի
          մերձակայքում։ Այն կառուցված է պատմական Արտաշատ քաղաքի բլուրներից մեկի
          վրա։ Վայրը համարվում է Հայաստանի ամենանշանավոր սրբատեղիներից մեկը՝
          սերտորեն կապված Գրիգոր Լուսավորչի և Հայաստանի՝ որպես առաջին քրիստոնյա
          պետության պատմության հետ։ Խոր Վիրապը նաև հայ ուխտագնացների և
          զբոսաշրջիկների ամենահաճախելի վայրերից է։
        </p>
      </div>
      <div className="photos">
        <img className="img one" src={img} alt=""/>
        <img className="img two" src={img1} alt=""/>
        <img className="img fore" src={img3} alt=""/>
      </div>
    </section>
  );
}
export default Section;
