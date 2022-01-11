import Tag from "../../components/tag";
import CaseStudy from "../../components/caseStudy";
import {useEffect} from "react";

export default function Moov() {
  const rootClassName = 'ic-work-wrapper'
  let allCaseStudies = [];

  useEffect(() => {
    allCaseStudies = document.querySelectorAll('.case-study');
  }, []);

  const toogleTag = (tag) => {
    for (const caseStudy of allCaseStudies) {
      if(tag === 'All') {
        caseStudy.style.display = "flex";
      }
      else{
        const tags = caseStudy.dataset.tags;
        if(tags.includes(tag)) {
          caseStudy.style.display = "flex";
        } else {
          caseStudy.style.display = "none";
        }
      }
    }
  }

  return (
      <div className={rootClassName}>
          <div className={`${rootClassName}__title`}>
            We work with a <strong>diverse team</strong> of <strong>talented</strong> <br />
            individuals that work closely with <strong>our</strong> <br />
            <strong>clients</strong> to solve <strong>complex</strong> problems.
          </div>
          <div className={`${rootClassName}__tags`}>
            <Tag onClick={()=>{ toogleTag('All') }} >All</Tag>
            <Tag onClick={()=>{ toogleTag('Design Development') }} >Design Development</Tag>
            <Tag onClick={()=>{ toogleTag('Strategy') }} >Strategy</Tag>
            <Tag onClick={()=>{ toogleTag('Consultancy') }} >Consultancy</Tag>
          </div>
          <div className={`${rootClassName}__case-studies`}>
            <div className={`${rootClassName}__case-studies__content`}>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } } caseName="olie" data-tags={['Strategy', 'Design Development']}/>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="consult" data-tags={['Consultancy']}/>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="other" data-tags={['Strategy', 'Design Development']}/>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="lectures" data-tags={['Consultancy']}/>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="moov" data-tags={['Design Development']}/>
              <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="eazup" data-tags={['Strategy', 'Design Development']}/>
            </div>
          </div>

      </div>
  );
}