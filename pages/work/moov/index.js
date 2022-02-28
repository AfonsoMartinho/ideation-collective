
import Tag from "../../../components/tag";

export default function Moov() {
  const rootClassName = 'ic-moov-wrapper'
  return (
        <div className={rootClassName}>
            <div className={`${rootClassName}__title`}>
                <div className={`${rootClassName}__title__name`}>MOOV</div>
                <div className={`${rootClassName}__title__text`}>How we designed an app that brings the <br /> <strong>ultimate sound experience</strong> to <br /> everyone’s pockets. </div>
                <div className={`${rootClassName}__title__details`}>
                    <div className={`${rootClassName}__title__details__date`}>2018-2019</div>
                    <a className={`${rootClassName}__title__details__website`}>moov.com</a>
                </div>
            </div>
            <div className={`${rootClassName}__description`}>
                <div className={`${rootClassName}__description__text`}>
                    MOOV is a music mobile platform that helps users find the right music or podcast for every moment. The main idea behind this project was to develop a usable, consistent, and organized system, that allows users to easily find music and podcasts. Bringing the ultimate sound experience to everyone’s pockets.
                </div>
                <div className={`${rootClassName}__description__tags`}>
                    <Tag>Design Startegy</Tag>
                    <Tag>UI/UX Design</Tag>
                    <Tag>Wireframing</Tag>
                    <Tag>Digital Prototypes</Tag>
                </div>
            </div>
            <div className={`${rootClassName}__gallery`}>
                <img src="../assets/moov1.png" alt="" />
                <img src="../assets/moov2.png" alt="" />
                <img src="../assets/moov3.png" alt="" />
                <img src="../assets/moov4.png" alt="" />
                <img src="../assets/moov5.png" alt="" />
            </div>
            <div className={`${rootClassName}__final`}>
                <div className={`${rootClassName}__final__text`}>
                    In other words, we build <strong>innovations</strong> that deliver a <br /> <strong>remarkable customer experience.</strong>
                </div>
                <div className={`${rootClassName}__final__img`}>
                    <img src="../assets/moov-ideation.png" alt="moov-ideation" />
                    <div className={`${rootClassName}__final__img__logo`}/>
                </div>
            </div>

        </div>
    );
}