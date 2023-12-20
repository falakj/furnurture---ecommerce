import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";
import { styled } from "styled-components";

const MainContainer = styled.div`
  background-color: cornflowerblue;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonHome = styled.button`
  border-radius: 3px;
  border: 2px solid #212121;
  color: #212121;
  margin: 0 1em;
  padding: 10px;
  cursor: pointer;
`;

const LoggedIn = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 65px;
  text-transform: uppercase;
`;

const MainC = styled.div``;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.1);
  height: 50px;
  padding: 10px;
  gap: 15%;
  width: auto;
`;

const EachPage = styled.div`
  height: auto;
  width: auto;
  padding: 1% 2%;
  //border: 1px solid #212121;
  border-radius: 20px;
  margin: 3%;
`;

export default function Layout({children}) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <MainContainer>
        <ButtonHome onClick={() => signIn("google")}>
          Login With Google
        </ButtonHome>
        <ButtonHome>Login with Email</ButtonHome>
      </MainContainer>
    );
  }
  return (
    <MainC>
      <NavContainer>
        <LoggedIn>E-Commerce</LoggedIn>
        <Navbar />
      </NavContainer>
          <EachPage>{children}</EachPage>
    </MainC>
  );
}
