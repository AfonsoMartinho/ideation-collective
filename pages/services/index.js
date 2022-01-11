import Tag from "../../components/tag";
import Accordion from "../../components/accordion";

export default function Services() {
  const rootClassName = 'ic-services-wrapper'
  const strategyData = [
      { title: 'User Experience', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
      { title: 'Brand Strategy & Architecture', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
      { title: 'Strategy', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
      { title: 'Discovery & Research', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
  ]
  const designData = [
    { title: 'Website Design & Development', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'UX/UI Design', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'Information Architecture', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'Wireframing', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
]
const consultancyData = [
    { title: 'Design-Driven Innovation', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'Design Thinking', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'UX Design Consulting', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
    { title: 'In-House Training', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
]
  return (
        <div className={rootClassName}>
            <div className={`${rootClassName}__banner`}>
                <img width="100%" src="/assets/services-banner.png" alt="ideation-showcase" />
            </div>
            <div className={`${rootClassName}__title`}>
                We love <span>co-creating</span> ideas for <br />
                the <span>digital market</span> and presenting <br />
                them to our customers. <br />
            </div>
            <div className={`${rootClassName}__services-showcase`}>
                <div className={`${rootClassName}__services-showcase__service left`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>01</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>strategy</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-startegy.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Strategy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><Accordion data={strategyData}/></div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__services-showcase__service right`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>02</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>design development</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/services-design.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Design Development</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><Accordion data={designData}/></div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__services-showcase__service left`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>03</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>consultancy</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-consultancy.png" alt="service-consultancy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Consultancy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><Accordion data={consultancyData}/></div>                    
                    </div>
                </div>              
            </div>
            
        </div>
    );
}
