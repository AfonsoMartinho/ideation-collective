import Button from "../button";

export default function Footer() {
    const rootClassName = 'footer'
    return (
      <>
        <div className={rootClassName}>
            <div className={`${rootClassName}__top`}>
                <div className={`${rootClassName}__top__title`}>Let’s <strong>ideate </strong> together. Book your call today.</div>
                <Button className={`${rootClassName}__top__button`} onClick={()=>{  window.location.href='#' } }>book a call</Button>
            </div>
            <div className={`${rootClassName}__bottom`}>
                <div className={`${rootClassName}__bottom__mail`}> <a href="mailto:info@ideation-colective.com">info@ideation-collective.com</a></div>
                <div className={`${rootClassName}__bottom__links hide-mobile`}>
                    <a className={`${rootClassName}__bottom__links__link`} rel="noreferrer" target="_blank" href="https://www.linkedin.com/company/ideationcollective-pt/">Linkedin</a>
                    <a className={`${rootClassName}__bottom__links__link`} rel="noreferrer" target="_blank"  href="https://www.instagram.com/ideation_collective/">Instagram</a>
                    <a className={`${rootClassName}__bottom__links__link`} rel="noreferrer" target="_blank"  href="https://www.behance.net/ideation-collective">Behance</a>
                </div>
                <div className={`${rootClassName}__bottom__location`}>From Porto, PT to <strong>anywhere.</strong></div>
                <div className={`${rootClassName}__bottom__links hide-desktop`}>
                    <a className={`${rootClassName}__bottom__links__link`} href="#">Linkedin</a>
                    <a className={`${rootClassName}__bottom__links__link`} href="#">Instagram</a>
                    <a className={`${rootClassName}__bottom__links__link`} href="#">Behance</a>
                </div>
            </div>
        </div>
      </>
    );
  }