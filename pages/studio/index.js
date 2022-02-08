import Button from "../../components/button";
import ProcessAnimation from "../../components/processAnimation";
import ProcessAnimationMobile from "../../components/processAnimationMobile";

export default function Studio() {
  const rootClassName = 'ic-studio-wrapper'
    return(
        <div className={rootClassName}>
            <div className={`${rootClassName}__title`}>
                <div className={`${rootClassName}__title__main`}>
                    A <strong>strategic</strong> design <strong>consultancy</strong>  that <br />
                    turns <strong>design</strong>  and <strong>creativity</strong>  into a <br />
                    competitive <strong>advantage</strong>.
                </div>
                <div className={`${rootClassName}__title__description`}>
                    Our approach blends user needs with experience
                     design to <strong> build meaningful</strong> products, services and
                    brands that are easily understood, useful, narratively
                     driven and delightful.
                </div>
            </div>
            <div className={`${rootClassName}__main-img`}>
                <img src="/assets/studio1.png" alt="" />
            </div>
            <div className={`${rootClassName}__text`}>
                In other words, we build <strong>innovations</strong> that deliver a <br />
                <strong>remarkable customer</strong> experience.
            </div>
            <div className={`${rootClassName}__img-gallery`}>
                <div className={`${rootClassName}__img-gallery__row1`}>
                    <img className={`${rootClassName}__img-gallery__studio2`} src="/assets/studio2.png" alt="" />
                    <img className={`${rootClassName}__img-gallery__studio3 hide-mobile`} src="/assets/studio3.png" alt="" />
                </div>
                <img className={`${rootClassName}__img-gallery__studio3 hide-desktop`} src="/assets/studio3.png" alt="" />
                <div className={`${rootClassName}__img-gallery__row2`}>
                    <img className={`${rootClassName}__img-gallery__studio4`} src="/assets/studio4.png" alt="" />   
                </div>
            </div>
            <div className={`${rootClassName}__gif`}>
              <div className={`${rootClassName}__gif__row`}>
                <span>Our approach </span>
                <img className={`${rootClassName}__gif__row__image hide-mobile`} src="/assets/studio7.png"></img>
                <img className={`${rootClassName}__gif__row__image left hide-desktop`} src="/assets/studio7.png"></img>
                <span> is</span>
                <img className={`${rootClassName}__gif__row__image hide-desktop`} src="/assets/studio8.png"></img>
              </div>
              <div className={`${rootClassName}__gif__row`}>
                <img className={`${rootClassName}__gif__row__image left hide-mobile`} src="/assets/studio8.png"></img>
                <span> human centered </span>
                <img className={`${rootClassName}__gif__row__imagem hide-mobile`} src="/assets/studio9.png"></img>
              </div>
              <div className={`${rootClassName}__gif__row`}>
                <img className={`${rootClassName}__gif__row__image left hide-desktop`} src="/assets/studio9.png"></img>
                <span> and this </span>
                <img className={`${rootClassName}__gif__row__image hide-mobile`} src="/assets/studio10.png"></img>
                <img className={`${rootClassName}__gif__row__image left hide-mobile `} src="/assets/studio10.png"></img>
                <span className="hide-mobile"> is our</span>
                {/* <img className={`${rootClassName}__gif__row__image hide-desktop`} src="/assets/studio11.png"></img> */}
              </div>
                <div className={`${rootClassName}__gif__row hide-desktop`}>
                    <img className={`${rootClassName}__gif__row__image left`} src="/assets/studio10.png"></img>
                    <span> is our</span>
                    <img className={`${rootClassName}__gif__row__image hide-desktop`} src="/assets/studio11.png"></img>
                </div>
              <div className={`${rootClassName}__gif__row`}>
                <img className={`${rootClassName}__gif__row__image left hide-mobile`} src="/assets/studio11.png"></img>
                <span> process</span>
              </div>
            </div>
            <div className={`${rootClassName}__process hide-mobile`}>
                <ProcessAnimation/>
            </div>
            <div className={`${rootClassName}__process hide-desktop`}>
                <ProcessAnimationMobile/>
            </div>
            <div className={`${rootClassName}__final-imgs`}>
                <img className={`${rootClassName}__final-imgs__studio5 hide-mobile`} src="/assets/studio5.png" alt="" />
                <img className={`${rootClassName}__final-imgs__studio6`} src="/assets/studio6.png" alt="" />
                <div className={`${rootClassName}__final-imgs__studio5`}>
                    <img className={`${rootClassName}__final-imgs__studio5 hide-desktop img`} src="/assets/studio5.png" alt="" />
                </div>
            </div>
            <div className={`${rootClassName}__final-words`}>
                <div className={`${rootClassName}__final-words__text`}>
                    We work with a <strong>diverse team</strong> of <strong>talented</strong> individuals <br />
                     that work closely with <strong>our clients</strong> to solve <strong>complex</strong>  <br />
                     problems.
                </div>
                <div className={`${rootClassName}__final-words__btn`}>
                    <Button>our services</Button>
                </div>
            </div>
        </div>
    )
}