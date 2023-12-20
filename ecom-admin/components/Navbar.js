import React from "react";
import { styled } from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import MainButton from "./MainButton";
import LogoutIcon from "./icons/LogoutIcon";


const Topbar = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  gap: 10em;
  font-weight: 500;
  a{
    text-decoration: none;
    color: inherit;
  }
`;

const CustomNavLink = styled.div`
  color: ${(props) => (props.$active ? "#3A3B3C" : "#212121")};
  background-color: ${(props) => (props.$active ? "#e6ffef" : "transparent")};
  border-radius: 10px;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;


const NavLink = ({ href, children}) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href} passHref>
      <CustomNavLink $active={isActive}>
        {children}
      </CustomNavLink>
    </Link>
  );
};




export default function Navbar() {

  const router = useRouter();

  async function logout() {
    await router.push('/');
    await signOut();
  }

  return (
    <Topbar>
      <NavLink href="/categories">
        <Image src="/store.svg" width={24} height={24} alt="Categories" />
        Categories
      </NavLink>

      <NavLink href="/products">
        <Image src="/products.svg" width={24} height={24} alt="Products" />
        Products
      </NavLink>

      <NavLink href="/orders">
        <Image src="/orders.svg" width={24} height={24} alt="Orders" />
        Orders
      </NavLink>

      <MainButton onClick={logout}>
        <LogoutIcon />
        Logout
      </MainButton>
    </Topbar>
  );
}
