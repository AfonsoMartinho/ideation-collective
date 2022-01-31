import "../styles/main.scss";
import "../components/main.scss";
// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { CSSPlugin } from 'gsap/CSSPlugin'
import Layout from "../components/layout";

// gsap.registerPlugin(CSSPlugin)
// gsap.registerPlugin(ScrollTrigger);

if (typeof global.navigator === 'undefined') global.navigator = {};

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp;