import Tag from "../../components/tag";
import AccordionClosed from "../../components/accordionClosed";
import Table from "../../components/table";
import dynamic from "next/dynamic";

// import Lottie from 'react-lottie-tools';
import * as animationData from '../../public/assets/lottie/bannerservices.json'

const LottieAnimation = dynamic(
    import("react-lottie-tools").then((data) => data.LottieAnimation),
    { ssr: false } // ssr is important to be false
);

export default function Services() {
  const rootClassName = 'ic-services-wrapper'
//   const strategyData = [
//       { title: 'User Experience', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//       { title: 'Brand Strategy & Architecture', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//       { title: 'Strategy', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//       { title: 'Discovery & Research', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
//   ]
//   const designData = [
//     { title: 'Website Design & Development', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'UX/UI Design', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'Information Architecture', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'Wireframing', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
// ]
// const consultancyData = [
//     { title: 'Design-Driven Innovation', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'Design Thinking', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'UX Design Consulting', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' },
//     { title: 'In-House Training', description: 'We identify and create digital products and services that create revenue channels and help brands thrive in the new economy.' }
// ]
const strategyData = [
    { title: 'User Experience' },
    { title: 'Discovery & Research'},
    { title: 'Product Strategy' }
]
const designData = [
  { title: 'Website' },
  { title: 'Product Design' },
  { title: 'Prodcut Development' },
  { title: 'Mobile App' }
]
const consultancyData = [
  { title: 'Design Thinking' },
  { title: 'UX Design Consulting' },
  { title: 'In-House Training' }
]
  return (
        <div className={rootClassName}>
            <div className={`${rootClassName}__banner`}>
                {/* <img width="100%" src="/assets/services-banner.png" alt="ideation-showcase" /> */}
                <LottieAnimation loop={true} autoplay={true} animation={animationData} />
            </div>
            <div className={`${rootClassName}__title`}>
                We love <strong>co-creating</strong> ideas for <br />
                the <strong>digital market</strong> and presenting <br />
                them to our customers. <br />
            </div>
            <div className={`${rootClassName}__services-showcase`}>
                <div className={`${rootClassName}__services-showcase__service left`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text first`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>01</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>strategy</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-startegy.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Strategy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We discover and identify the key insights to help us solve complex problems, by co creating proofs of concept and validating them with users.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><AccordionClosed data={strategyData}/></div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__services-showcase__service right`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text first`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>02</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>design development</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/services-design.png" alt="service-startegy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Design Development</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We use scrum and agile methodlogies to create digital products that generate revenue channels and user retention.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><AccordionClosed data={designData}/></div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__services-showcase__service left`}>
                    <div className={`${rootClassName}__services-showcase__service__heading`}>
                        <span className={`${rootClassName}__services-showcase__service__heading__text first`}>services</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>03</span>
                        <span className={`${rootClassName}__services-showcase__service__heading__text`}>consultancy</span>
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__img`}>
                        <img src="/assets/service-consultancy.png" alt="service-consultancy" />
                    </div>
                    <div className={`${rootClassName}__services-showcase__service__description`}>
                        <Tag className="active">Consultancy</Tag>
                        <div className={`${rootClassName}__services-showcase__service__description__text`}>We coach and train designers and design teams to become more strategic and uer-centered.</div>
                        <div className={`${rootClassName}__services-showcase__service__description__accordiom`}><AccordionClosed data={consultancyData}/></div>                    
                    </div>
                </div>
                <div className={`${rootClassName}__final-words`}>
                We work with a <strong> diverse team</strong> of <strong> talented</strong> <br />
                 individuals that work closely with <strong> our</strong> <br />
                  clients to solve <strong>complex</strong> problems.
                </div>
                {/* <div className={`${rootClassName}__table`}>
                    <Table data={ {
                        title : 'Budget',
                        rows:{
                            'Strategy': [
                                { name: 'User Experience', price: '2 250€'},
                                { name: 'Discover & Research', price: '2 250€'},
                                { name: 'Product Strategy', price: '3 500€'}

                            ],
                            'Design Development': [
                                { name: 'Landing Page', price: '600€'},
                                { name: '5 page Website', price: '1 500€'},
                                { name: 'Product Design', price: '3 250€'}
                            ],
                            'Consultancy': [
                                { name: 'Design-Driven Innovation', price: '50€/hr'},
                                { name: 'UX Design Consulting', price: '50€/hr'},
                            ]
                        }
                    } } />
                </div> */}


            </div>
            
        </div>
    );
}
