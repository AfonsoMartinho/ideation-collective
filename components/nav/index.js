import Button from "../button";
import {useState} from 'react';

export default function Nav(props) {
    const rootClassName = 'nav'
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    return (
      <>
        <div className={`${rootClassName} ${props.className || ''}`}>
            <div className={`${rootClassName}__logo hide-mobile`}>
                <a href="/"><img src={props.logoSrc} alt="logo" /></a>
            </div>
            { props.children && (
                <div className={`${rootClassName}__content hide-mobile`}>
                    { props.children }
                </div>
            ) }
            <Button className="hide-mobile">book a call</Button>
            <div className={`${rootClassName}__mobile hide-desktop`}>
              <a href="/"><img src="/assets/logo-mobile.png" alt="logo" /></a>
              <div className={`${rootClassName}__mobile__left hide-desktop`}>
                <Button>book a call</Button>
                <div className={`${rootClassName}__mobile__left__burger`}><img src="/assets/burger.png" alt="burger" onClick={()=> { setIsOpenMobile(true)}} /></div>
              </div>
            </div>
            { props.children && (
                <div className={`${rootClassName}__nav-mobile hide-desktop ${isOpenMobile ? 'show' : 'hide'} `}>
                  <div className={`${rootClassName}__nav-mobile__top`}>
                      <div className={`${rootClassName}__nav-mobile__top__logo`}>
                        <a href="/"><img src="/assets/logo-dark.png" alt="logo" /></a>
                      </div>
                      <div className={`${rootClassName}__nav-mobile__top__close`}>
                        <img src="/assets/close.png" onClick={()=> { setIsOpenMobile(false)}} alt="logo" />
                      </div>
                  </div>
                  <div className={`${rootClassName}__nav-mobile__content`}>
                      { props.children }
                  </div>
                  <div className={`${rootClassName}__nav-mobile__footer`}>
                      <div className={`${rootClassName}__nav-mobile__footer__button`}>
                          <Button>book a call</Button>
                      </div>
                      <div className={`${rootClassName}__nav-mobile__footer__contacts`}>
                        <span>info@ideation-collective.com</span>
                        <span>From Porto, PT to  <strong>&nbsp;anywhere.</strong></span>
                      </div>
                      <div className={`${rootClassName}__nav-mobile__footer__social`}>
                          <span>Linkedin</span>
                          <span>Instagram</span>
                          <span>Behance</span>
                      </div>
                  </div> 

                </div>
            ) }
        </div>
      </>
    );
  }