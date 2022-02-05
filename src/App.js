import styled from 'styled-components';
import HomePage from './Pages/Home/HomePage';
import PropertPage from './Pages/ProperyPage/PropertPage';
import ProductItem from './Pages/ProductItem/ProductItem';
import ClassifiedPage from './Pages/Classified/ClassifiedPage';
import NavBar from './Components/Nav/NavBar';
import MobielNavBar from './Components/Nav/MobileNavBar/MobielNavBar';
import Footer from './Components/Footer/Footer';


import RegisterPage from './Pages/Register/Register';

import OverlayFull from './Components/Overlay/OverlayFull';
import {BrowserRouter,Routes,Route} from "react-router-dom";



function App() {




  return (

    
    
    <DIV className="App">

         <div className="app-wrapper">
          <BrowserRouter>

                <div className="app-content">
                          {/* <NavBar></NavBar>
                          <MobielNavBar></MobielNavBar> */}
                          <div className="clear"></div>
                        <Routes>
                                    <Route path="/" element={ 
                                      <>
                                      <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <HomePage></HomePage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />

                                    <Route path="/properties" element={ 
                                      <>
                                       <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <PropertPage></PropertPage>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />

                                    <Route path="/product-item" element={ 
                                      <>
                                      <NavBar></NavBar>
                                      <MobielNavBar></MobielNavBar>

                                      <ProductItem></ProductItem>
                                      <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/classified" element={ 
                                      <>
                                            <NavBar></NavBar>
                                          <MobielNavBar></MobielNavBar>

                                        <ClassifiedPage></ClassifiedPage>
                                        <Footer className='mt-6'></Footer>

                                      </>
                                    } />


                                    <Route path="/register" element={ 
                                      <> 

                                            <RegisterPage></RegisterPage>

                                      </>
                                    } />



                        </Routes>

                        {/* <Footer className='mt-6'></Footer> */}
                </div>

          </BrowserRouter>




                        {/* <OverlayFull></OverlayFull> */}

         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;

    .app-wrapper{
      
      width: 100%;
      position: relative; 
      
      .app-content{
        width: var(--nav-footer-width);
        margin: 0 auto; 
      }
    }

    .clear{
      /* &:after{
        content: '';
        width: 100%;
        height: 200px;
        background: #f44336;
        display: block;
        transition: 0.45s;
    } */
    }

`;

export default App;
