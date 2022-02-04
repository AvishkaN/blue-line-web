import styled from 'styled-components';
import Link from '../../../Components/UI/Link/Link';
import Product from './Product';

const classifiedProducts=[
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/calculator-ct-8866v-solar-led-display-desktop-for-sale-colombo/6f610c99-c7ca-40b5-8c01-348bbdb38b8c/160/120/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Apple iPhone 7 128GB (Used)",
        image:"https://i.ikman-st.com/apple-iphone-7-128gb-used-for-sale-colombo-6708/37a40b7e-9072-4505-abc0-7e3f3eccae73/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },
    {
        productName:"Calculator CT-8866V Solar led display",
        image:"https://i.ikman-st.com/apple-iphone-x-256gb-usa-used-for-sale-colombo-87/751ebad1-ec13-4ee4-af08-e287071c869d/142/107/cropped.webp",
        loacation:"Colombo, All Electronics",
        price:"Rs 2,090",
    },

];



function ProductColumn({className="",}) {
  return (
    <DIV className={`${className}`}>
         <div className="ProductColumn-wrapper">

        {
        classifiedProducts.map(product=>(
            <Link to="/product-item">
                    <Product className='product-item  ms-3 me-3 cursor-p mt-5 w-70' price={product.price} image={product.image} name={product.productName} location={product.loacation}></Product>
            </Link>
            ))
        }
         </div>
    </DIV>
  );
}


const DIV=styled.div`
    width: 100%;
    /* margin-top: var(--margin-top-fix-nav);  */  /*only ProductColumn */
    
    .ProductColumn-wrapper{
      /* width: var(--ProductColumn-content-width);
        margin-left: auto;
        margin-right: auto;  */

        .product-item{
            border-bottom: 0.5px solid #d4ded9;

            &:hover{
                box-shadow: 0 0 8px 0 #d4ded9;
               border-radius: 4px;
            }

            @media(max-width:1085px){
                width: 100% !important;
            }
        }

    }
`;

export default ProductColumn;
