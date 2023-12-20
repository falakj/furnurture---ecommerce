import Link from "next/link";
import React, { useContext } from "react";
import { styled } from "styled-components";
import Middle from "./Middle";
import { CartContext } from "./CartContext";
import CartIcon from "./icons/CartIcon";
import ProfileIcon from "./icons/ProfileIcon";
import WishlistBlack from "./icons/WishlistBlack";
import { WishlistContext } from "./WishlistContext";
import { useRouter } from "next/router";

const Heading = styled.header`
  background-color: white;
  margin-top: 10px;
`;

const Logo = styled(Link)`
  letter-spacing: 5px;
  color: #212121;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  color: #da7f8f;
  text-shadow: 0 4px 4px rgba(244, 218, 223, 1);
`;

const Navb = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 0;
`;

const NavStyled = styled.nav`
  display: flex;
  gap: 40px;
  align-items: center;
  margin-left: 70px;

  a {
    text-decoration: none;
    color: #212121;
    font-weight: 500;
    
    &:hover {
      color: #da7f8f;
      text-decoration: underline #a7bbc7;
      text-decoration-thickness: 0.5px;
      text-underline-offset: 4px;
    }
  }

   
    
    a.active {
      color: #da7f8f;
      text-decoration: underline #a7bbc7;
      text-decoration-thickness: 0.5px;
      text-underline-offset: 4px;
    }
  
`;

const Icons = styled.div`
  display: flex;
  gap: 28px;
  margin-left: 50px;
`;



export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const { wishProducts } = useContext(WishlistContext);
  const { asPath } = useRouter();
  
  return (
    <Heading>
      <Middle>
        <Navb>
          <Logo href="/">furnurture</Logo>
          <NavStyled>
            <Link href="/" className={asPath === "/" ? "active" : ""}>
              SHOP
            </Link>
            <Link
              href="/products"
              className={asPath === "/products" ? "active" : ""}
            >
              LOOKBOOK
            </Link>
            <Link
              href="/account"
              className={asPath === "/account" ? "active" : ""}
            >
              ACCOUNT
            </Link>
            <Link
              href="/aboutus"
              className={asPath === "/aboutus" ? "active" : ""}
            >
              ABOUT US
            </Link>

            <Icons>
              <Link href="/profile">
                <ProfileIcon />
              </Link>

              <Link
                href="/wishlistpage"
                className={asPath === "/wishlistpage" ? "active" : ""}
              >
                <WishlistBlack />({wishProducts.length})
              </Link>

              <Link
                href="/cartpage"
                className={asPath === "/cartpage" ? "active" : ""}
              >
                <CartIcon />({cartProducts.length})
              </Link>
            </Icons>
          </NavStyled>
        </Navb>
      </Middle>
    </Heading>
  );
}