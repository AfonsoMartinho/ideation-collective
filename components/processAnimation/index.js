import * as animationData from '../../public/assets/lottie/process.json'
import dynamic from "next/dynamic";
import ScrollText from "./scrollText.js";


// import { Animator, ScrollPage, batch, Fade, Move, Sticky } from "react-scroll-motion";
// // import { useEffect } from 'react';

// // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());

const LottieScrollSection = dynamic(
    import("react-lottie-tools").then((data) => data.LottieScrollSection),
    { ssr: false } // ssr is important to be false
);
// const ScrollSection = dynamic(
//     import("react-scroll-motion").then((data) => data.ScrollContainer),
//     { ssr: false } // ssr is important to be false
// );

export default function ProcessAnimation() {
    const rootClassName='ic-process-animation'
    return(
        <div className={rootClassName}>
            <LottieScrollSection className={`${rootClassName}__lottie`} height={5000} animation={animationData} frames={[0, 720]} />
            <div className={`${rootClassName}__scrollable`}>
                <ScrollText />
            {/* <ScrollSection snap="none">
                    <ScrollPage page={0}>
                        <Animator animation={FadeUp}>
                            <div className={`${rootClassName}__scrollable__text`}>
                                <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                                <div className={`${rootClassName}__scrollable__text__title`}><strong>understanding</strong> <br /> people <strong> and</strong> culture</div>
                                <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                            </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={1}>
                        <Animator animation={FadeUp}>
                        <div className={`${rootClassName}__scrollable__text`}>
                            <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                            <div className={`${rootClassName}__scrollable__text__title`}><strong> learning from</strong> <br /> <strong>the</strong> industry</div>
                            <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                        </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={2}>
                        <Animator animation={FadeUp}>
                        <div className={`${rootClassName}__scrollable__text`}>
                            <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                            <div className={`${rootClassName}__scrollable__text__title`}><strong>experimenting</strong> with <br /> idea <strong>exploration</strong></div>
                            <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                        </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={3}>
                        <Animator animation={FadeUp}>
                        <div className={`${rootClassName}__scrollable__text`}>
                            <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                            <div className={`${rootClassName}__scrollable__text__title`}><strong>build our</strong> ideas<br /> <strong>for</strong> user <strong>testing</strong></div>
                            <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                        </div>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage page={4}>
                        <Animator animation={FadeUp}>
                        <div className={`${rootClassName}__scrollable__text`}>
                            <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                            <div className={`${rootClassName}__scrollable__text__title`}><strong>getting</strong> user <br /><strong>validation</strong></div>
                            <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                        </div>
                        </Animator>
                    </ScrollPage>
            </ScrollSection> */}
            </div>
        </div>
    )
    // useEffect(()=>{
    //     renderIt();
    // },[])
    
}