import * as animationData from '../../public/assets/lottie/process.json'
import dynamic from "next/dynamic";
const LottieScrollSection = dynamic(
    import("react-lottie-tools").then((data) => data.LottieScrollSection),
    { ssr: false } // ssr is important to be false
  );

export default function ProcessAnimation() {
    const rootClassName='ic-process-animation'
    return(
        <div className={rootClassName}>
            <LottieScrollSection className={`${rootClassName}__lottie`} height={5000} animation={animationData} frames={[0, 720]} />
            <div className={`${rootClassName}__scrollable`}>
                <div className={`${rootClassName}__scrollable__text`}>
                    <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                    <div className={`${rootClassName}__scrollable__text__title`}><strong>understanding</strong> <br /> people <strong> and</strong> culture</div>
                    <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                </div>
                <div className={`${rootClassName}__scrollable__text`}>
                    <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                    <div className={`${rootClassName}__scrollable__text__title`}><strong> learning from</strong> <br /> <strong>the</strong> industry</div>
                    <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                </div>
                <div className={`${rootClassName}__scrollable__text`}>
                    <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                    <div className={`${rootClassName}__scrollable__text__title`}><strong>experimenting</strong> with <br /> idea <strong>exploration</strong></div>
                    <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                </div>
                <div className={`${rootClassName}__scrollable__text`}>
                    <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                    <div className={`${rootClassName}__scrollable__text__title`}><strong>build our</strong> ideas<br /> <strong>for</strong> user <strong>testing</strong></div>
                    <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                </div>
                <div className={`${rootClassName}__scrollable__text`}>
                    <div className={`${rootClassName}__scrollable__text__slash`}>/</div>
                    <div className={`${rootClassName}__scrollable__text__title`}><strong>getting</strong> user <br /><strong>validation</strong></div>
                    <div className={`${rootClassName}__scrollable__text__description`}>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the business possibilities within our industry.</div>
                </div>
            </div>
        </div>
    )
}