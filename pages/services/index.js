import Tag from "../../components/tag";

export default function Services() {
  const rootClassName = 'ic-services-wrapper'
  return (
        <div className={rootClassName}>
            <div className={`${rootClassName}__banner`}>
                <img width="100%" src="/assets/services-banner.png" alt="ideation-showcase" />
            </div>
            <div className={`${rootClassName}__title`}>
                We love <span>co-creating</span> ideas for <br />
                the <span>igital market</span> and presenting <br />
                them to our customers. <br />
            </div>
            <div className={`${rootClassName}__services-showcase`}>
                <div className={`${rootClassName}__services-showcase__service left`}>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-startegy.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Strategy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}>COMPONENT</div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__services-showcase__service right`}>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-startegy.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Strategy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}>COMPONENT</div>                    
                    </div>
                </div>              
            </div>
            
        </div>
    );
}
