import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const mont = Montserrat({ subsets: ["latin"] });

export default function App({Component, pageProps: { session, ...pageProps }}) {
    return (
      <>
        <style jsx global>{`
          body {
            font-family: ${mont.style.fontFamily};
          }
        `}</style>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </>
    );
}
