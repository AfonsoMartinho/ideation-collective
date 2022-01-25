import Button from "../button";

export default function Nav(props) {
    const rootClassName = 'nav'
    return (
      <>
        <div className={`${rootClassName} ${props.className || ''}`}>
            <div className={`${rootClassName}__logo`}>
                <a href="/"><img src={props.logoSrc} alt="logo" /></a>
            </div>
            { props.children && (
                <div className={`${rootClassName}__content`}>
                    { props.children }
                </div>
            ) }
            <Button>book a call</Button>
        </div> 
      </>
    );
  }