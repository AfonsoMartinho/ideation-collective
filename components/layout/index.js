import Nav from "../nav";
import { useRouter } from 'next/router';

export default function Layout(props) {
    const rootClassName = 'ic-layout-wrapper';
    const router = useRouter();
    return (
        <div className={rootClassName}>
            <Nav logoSrc="/assets/logo.png">
                <a href="something" className={router.pathname == "/something" ? "active" : ""}>work</a>
                <a href="studio" className={router.pathname == "/studio" ? "active" : ""}>studio</a>
                <a href="services" className={router.pathname == "/services" ? "active" : ""}>services</a>
            </Nav>
            {props.children}
            <footer></footer>
        </div>
    );
  }