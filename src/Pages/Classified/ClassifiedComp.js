import styled from 'styled-components';
import FilterColumn from './FIlterColumn/FilterColumn';
import ProductColumn from './ProductCol/ProductColumn';

import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import { useState } from 'react';
import { useEffect } from 'react';



function ClassfiedPageComp({className=""}) {



    const[showFilter,setShowFilter]=useState(true);


    const showHidefilter=(e)=>{

        // console.log(e.closest('.filter-icon-svg'));
        const FilterICon=e.target.closest('.filter-icon-svg');

        if(FilterICon){
            setShowFilter(!showFilter);
        }
    }

    useEffect(()=>{
        

        const documentWidth=document.documentElement.clientWidth;

        if(documentWidth<992){ 
            setShowFilter(false);

        }

    },[]);



  return (
    <DIV className={`${className}`} onClick={showHidefilter}>
         <div className="ClassfiedPageComp-wrapper">

             <div className="filter-icon ps-5 cursor-p">
                 <div className="row">
                        <div className="col p-3">
                           {  showFilter  && <FilterAltIcon className=' filter-icon-svg font-2-7 text-color-primary'></FilterAltIcon>}
                            {!showFilter && <FilterAltOffIcon className=' filter-icon-svg font-2-7 text-color-primary'></FilterAltOffIcon>}

                        </div>
                 </div>
             </div>

               <div className="row pe-4 ps-4  mt-3">
                  {showFilter &&(
                       <div className="filtercol col-lg-3 p-3">
                            <FilterColumn></FilterColumn>
                            </div>
                    )}


                   <div className="col-lg-9">
                          <ProductColumn></ProductColumn>
                   </div>
               </div>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ClassfiedPageComp */
    
    .ClassfiedPageComp-wrapper{
      /* width: var(--ClassfiedPageComp-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .filtercol{
            border: 2px solid var(--color-black);

            @media (max-width: 992px){
                /* display: none;   */
            }

        }

        .filter-icon{
            /* @media (min-width: 992px){
                display: none;  
            } */
        }

        @media (min-width: 1085px){
            .col-lg-3 {
                flex: 0 0 auto;
                width: 25%;
            }
        }

        @media (min-width: 1085px){
            .col-lg-9 {
                flex: 0 0 auto;
                width: 75%;
            }
        }


    }
`;

export default ClassfiedPageComp;
