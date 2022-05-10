import "../styles/main.scss";
import "../components/main.scss";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { CSSPlugin } from 'gsap/CSSPlugin'
import Layout from "../components/layout";
import LoadingScreen from "../components/loadingScreen";
import { useEffect, useState } from 'react';


// gsap.registerPlugin(CSSPlugin)
// gsap.registerPlugin(ScrollTrigger);


if (typeof global.navigator === 'undefined') global.navigator = {};

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
    useEffect( () => setTimeout(() => {
          setIsLoading(false)
        }, 3500)
     ,[]);

      return (
        <>
          { isLoading && (
            <LoadingScreen />
          )}
          { !isLoading && (
            <Layout>
                <Component {...pageProps} />
            </Layout> 
          )}
        </>
      )
}

export default MyApp;