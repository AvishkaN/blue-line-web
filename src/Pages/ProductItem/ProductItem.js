import styled from 'styled-components';
import ProductItemComp from './ProductItemComp';



function ProductItem({className=""}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductItem-wrapper">
                <ProductItemComp className='mt-5'></ProductItemComp>
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;  
    margin-top: 10rem;   /*only page */
    
    .ProductItem-wrapper{
      width: var(--page-content-width);
        margin-left: auto;
        margin-right: auto; 

    }
`;

export default ProductItem;