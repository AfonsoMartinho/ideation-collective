// import dynamic from "next/dynamic";
import { useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// const gsap = dynamic(
//     import("gsap").then((data) => data.gsap),
//     { ssr: false } // ssr is important to be false
// );

// const ScrollTrigger = dynamic(
//     import("gsap/ScrollTrigger").then((data) => data.ScrollTrigger),
//     { ssr: false } // ssr is important to be false
// );

export default function ProcessAnimation() {
    const rootClassName='ic-process-animation-mobile'
    const ref = useRef(null);

    useEffect(() => {
        // importing cssPlugin from gsap only when after the code runs in the client side
        const GSAP = require("gsap/CSSPlugin");
        const { CSSPlugin } = GSAP;
        gsap.registerPlugin(CSSPlugin);



        // const element = ref.current;
        gsap.utils.toArray("#people").forEach((text) => {
            ScrollTrigger.create({
                trigger: text,
                toggleClass: "hide",
                onEnter: () => { text.classList.remove("hide") },
                onEnterBack: () => { text.classList.remove("hide") },
                onLeave: () => { text.classList.add("hide") },
                onLeaveBack: () => { text.classList.add("hide") },
              });
        });
        // gsap.to(
        //     element.querySelector("#people"),
        //     {
        //       scrollTrigger: {
        //         trigger: element.querySelector("#people"),
        //         // endTrigger: element.querySelector("#indu"),
        //         toggleClass: "hide",
        //         onEnter: () => { element.querySelector("#people").classList.remove("hide") },
        //         onEnterBack: () => { element.querySelector("#people").classList.remove("hide") },
        //         onLeave: () => { element.querySelector("#people").classList.add("hide") },
        //         onLeaveBack: () => { element.querySelector("#people").classList.add("hide") },
        //       }
        //     }
        //   );
      }, []); 
    return(
        <div id="trigger" ref={ref} className={`${rootClassName}__scrollable__container__minor`}>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}>/</div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}><strong>understanding</strong> <br /> people <strong> and</strong> culture</div>
            </div>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}>/</div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}><strong> learning from</strong> <br /> <strong>the</strong> industry</div>
            </div>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}>/</div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}><strong>experimenting</strong> with <br /> idea <strong>exploration</strong></div>
            </div>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}>/</div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}><strong>build our</strong> ideas<br /> <strong>for</strong> user <strong>testing</strong></div>
            </div>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}>/</div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}><strong>getting</strong> user <br /><strong>validation</strong></div>
            </div>
            <div className={`${rootClassName}__scrollable__text__minor`} id="people">
                <div className={`${rootClassName}__scrollable__text__minor__slash`}></div>
                <div className={`${rootClassName}__scrollable__text__minor__title`}></div>
            </div>
        </div>
    )
}