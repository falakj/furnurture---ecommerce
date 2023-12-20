import Layout from "@/components/Layout";
import { useSession } from 'next-auth/react';
import Image from "next/image";
import { styled } from "styled-components";


const Hello = styled.div`
color: purple;
display: flex;
flex-direction: row;
justify-content: start;
gap: 15px;
align-items: center;
`
const Content = styled.div`
margin-top: 20px;
`

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Hello>
        Hello, {session?.user?.name}
        <Image src={session?.user?.image} width={32} height={32} alt="" />
      </Hello>
      <Content>
        Ecommerce Dashboard
      </Content>
    </Layout>
  );
}