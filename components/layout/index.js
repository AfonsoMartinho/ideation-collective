import Nav from "../nav";
import Footer from "../footer";
import { useRouter } from 'next/router';
import Head from 'next/head'

export default function Layout(props) {
    const rootClassName = 'ic-layout-wrapper';
    const router = useRouter();
    return (
        <div className={rootClassName}>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
            </Head>
            <Nav logoSrc="/assets/logo.svg">
                <a href="/work" className={router.pathname == "/work" ? "active" : ""}>work</a>
                <a href="/studio" className={router.pathname == "/studio" ? "active" : ""}>studio</a>
                <a href="/services" className={router.pathname == "/services" ? "active" : ""}>services</a>
            </Nav>
            <section className="content">
                {props.children}
            </section>
            <Footer/>
        </div>
    );
  }