import Section from './Page1/Section';
import Section2 from './Page1/Section2';
import Section3 from './Page1/Section3';
import Section4 from './Page1/Section4';
import Section5 from './Page1/Section5';
import Footer from './Page1/Footer';

function Home1(){
    return(
        <div>
            <Section/>
            <Section2/>
            <Section3/>
            {/* <Section4/> */}
            {/* <Section5/> */}
            <Footer/>
        </div>
    )
}
export default Home1;