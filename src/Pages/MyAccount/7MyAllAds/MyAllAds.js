import styled from 'styled-components';



function Page({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="Page-wrapper">
                <h1>My All Ads</h1>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only page */
    
    .Page-wrapper{
      /* width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto;  */

    }
`;

export default Page;
