import styled from 'styled-components';



function SingleResturantPage({className=""}) {
  return (
    <DIV className={`${className} pageFixed`}>
         <div className="SingleResturantPage-wrapper ">
                single resturant
                {/* single Resturant nav */}
                
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only SingleResturantPage */
    
    .SingleResturantPage-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default SingleResturantPage;