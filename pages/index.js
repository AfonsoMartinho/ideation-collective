import Head from "next/head";
import Button from "../components/button";
import HorizontalCarousel from "../components/horizontalCarousel";
import TestimonialCard from "../components/testimonialCard";

export default function Home() {
  const rootClassName = 'ic-home-wrapper'
  return (
    <div className="container">
      <Head>
        <title>Ideation Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={rootClassName}>
            <div className={`${rootClassName}__title`}>
              <div className={`${rootClassName}__title__row`}>
                <span>We turn</span>
                <img className={`${rootClassName}__title__row__gif1`} src="assets/title1.gif"></img>
                <span>design</span>
              </div>
              <div className={`${rootClassName}__title__row`}>
                <img className={`${rootClassName}__title__row__gif2`} src="assets/title2.gif"></img>
                <span>into a</span>
                <img className={`${rootClassName}__title__row__gif3`} src="assets/title3.gif"></img>
              </div>
              <div className={`${rootClassName}__title__row`}>
                <span>competetive advantage.</span>
              </div>
            </div>
            <div className={`${rootClassName}__subtitle`}>
              <span>In other words, we build <strong>innovations</strong> that deliver a </span>
              <span><strong>remarkable customer experience.</strong></span>
            </div>
            <div className={`${rootClassName}__image-showcase`}>
             <img className={`${rootClassName}__image-showcase__img`} src="/assets/home-page1.png" alt="ideation-showcase" />
            </div>
            <div className={`${rootClassName}__studio-showcase`}>
              <span className={`${rootClassName}__studio-showcase__text1`}>We work with a <strong>diverse team</strong>  of <strong>talented</strong> individuals that work closely with <strong>our clients</strong>  to solve <strong>complex</strong> problems.</span>
              <span className={`${rootClassName}__studio-showcase__text2`}>Our approach blends user needs with experience design to <strong>build meaningful</strong> products, services and brands that are easily understood, useful, narratively driven and delightful.</span>
              <Button className={`${rootClassName}__studio-showcase__button`}>know the studio</Button>
            </div>
            <div className={`${rootClassName}__testimonials`}>
              <span className={`${rootClassName}__testimonials__title`}>testimonials</span>
              <span className={`${rootClassName}__testimonials__subtitle`}>Don’t just take <strong>our word</strong> for it.</span>
              <div className={`${rootClassName}__testimonials__list`}>
                <HorizontalCarousel>
                  <li>
                    <TestimonialCard 
                      logoSrc="assets/portoBSchool.svg"
                      name="Diogo Pinto"
                      position="Innovation Coordinator">
                        <div>Always ready an available to help at a very professional level. We ran a workshop design thinking together and <strong>it was a success</strong>!</div>
                      </TestimonialCard>
                  </li>  
                  <li>
                    <TestimonialCard 
                      logoSrc="assets/olie.png"
                      name="Vítor Leles"
                      position="Innovation & Coordinator">
                        <div>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the <strong>business possibilities</strong> within our industry.</div>
                      </TestimonialCard>
                  </li>
                  <li>
                    <TestimonialCard 
                      logoSrc="assets/urban.png"
                      name="Francisco Castro"
                      position="Business Development Manager">
                        <div>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the <strong>business possibilities</strong> within our industry.</div>
                      </TestimonialCard>
                  </li>
                  <li>
                    <TestimonialCard 
                      logoSrc="assets/run.png"
                      name="Vítor Leles"
                      position="Founder & CEO">
                        <div>Ideation Collective is the design thinking agency that helped us define our brand and made us aware of the <strong>business possibilities</strong> within our industry.</div>
                      </TestimonialCard>
                  </li>
                </HorizontalCarousel>                
              </div>
            </div>
            <div className={`${rootClassName}__mission`}>
              <div className={`${rootClassName}__mission__row`}>
                <span>We love</span>
                <img className={`${rootClassName}__mission__row__gif1`} src="assets/title1.gif"></img>
                <span>co-creating</span>
              </div>
              <div className={`${rootClassName}__mission__row`}>
                <img className={`${rootClassName}__mission__row__gif2`} src="assets/title1.gif"></img>
                <span> for the </span>
                <img className={`${rootClassName}__mission__row__gif3`} src="assets/title1.gif"></img>
                <span> digital</span>
              </div>
              <div className={`${rootClassName}__mission__row`}>
                <span>market.</span>
              </div>
              <Button>our services</Button>
            </div>
            <div className={`${rootClassName}__services`}>
              <div className={`${rootClassName}__services__service`}>
                <img src="/assets/design-development.svg" alt="design-development" />
                <div className={`${rootClassName}__services__service__title`}>Design Development</div>
              </div>
              <div className={`${rootClassName}__services__service`}>
                <img src="/assets/strategy.svg" alt="design-development" />
                <div className={`${rootClassName}__services__service__title`}>Strategy</div>
              </div>
              <div className={`${rootClassName}__services__service`}>
                <img src="/assets/consultancy.svg" alt="design-development" />
                <div className={`${rootClassName}__services__service__title`}>Consultancy</div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
}