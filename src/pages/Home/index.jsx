import HeroSection from "./HeroSection";

import NewChart from './NewChart/NewChart';
import Chart1 from "./Chart1";

import Chart4 from "./Chart4";

import DemoArea from "./Chart2";
import ApexChart from "./Chart3";
import Highcharts3DColumnChart from "./Chart5";
function Home() {
  return (
    <>
    <div className="">
    <HeroSection  />
    <Chart1/>
    <div className="radial-gradient-background ">

    {/*chart 2*/}
      <div className=" md:my-[250px]  md:px-10 ">
        
    <DemoArea/>
      </div>
      {/*chart 3*/}
      <div className=" md:my-[250px]   md:px-10 ">
    <ApexChart/>
      </div>
    </div>
      <div className=" md:my-[250px]   md:px-10 ">
    <Chart4/>
      </div>
      {/*chart 5*/}
      <div className=" md:my-[250px]   md:px-10 ">
    <Highcharts3DColumnChart/>
    
      </div>
 
 
    </div>
    <style jsx>{`
.radial-gradient-background {
  background: radial-gradient(circle at right, #BACDA2 1%, #FFF 24.5%);
}
`}</style>
  
      
    </>
  );
}

export default Home;
