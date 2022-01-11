import Nav from "../nav";
import Footer from "../footer";
import { useRouter } from 'next/router';

export default function Layout(props) {
    const rootClassName = 'ic-moov-wrapper';
    const router = useRouter();
    return (
        <div className={rootClassName}>
            <Nav logoSrc="/assets/logo.png">
                <a href="/work" className={router.pathname == "/work" ? "active" : ""}>work</a>
                <a href="/studio" className={router.pathname == "/studio" ? "active" : ""}>studio</a>
                <a href="/services" className={router.pathname == "/services" ? "active" : ""}>services</a>
            </Nav>
            {props.children}
            <Footer/>
        </div>
    );
  }