import Router from './router';
import NewChart from './pages/Home/NewChart/NewChart';
import {useEffect} from 'react'
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
    <div dir='rtl'>
       <Router />
       </div>
        {/* <div className="my-10">
    <NewChart/>
    </div>*/}
    </> 
  )
}

export default App
