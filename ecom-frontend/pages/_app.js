import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle } from "styled-components";
import { WishlistContextProvider } from "@/components/WishlistContext";


const GlobalStyles = createGlobalStyle`
  body {
    background-color: #fff;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;


    
    scrollbar-width: thin; 
    scrollbar-color: #A7BBC7 transparent; 

    
    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #A7BBC7;
      border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: #A7BBC7;
    }
  }
`;

export default function App({ Component, pageProps }) {


  
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <WishlistContextProvider>
          <Component {...pageProps} />
        </WishlistContextProvider>
      </CartContextProvider>
    </>
  );
}
