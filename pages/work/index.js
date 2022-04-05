import Tag from "../../components/tag";
import CaseStudy from "../../components/caseStudy";
import {useState, useEffect} from "react";
import fetchFromCMS from "/lib/service";

export default function Work({ parsedProjects }) {
  const rootClassName = 'ic-work-wrapper'
  let allCaseStudies = [];
  console.log(parsedProjects)
  const [casesToShow, setCasesToShow] = useState([])
  const [showMe, setShowMe] = useState(false);
  const [activeTag, setActiveTag] = useState('');
  // const ref = useRef(null);
  
  useEffect(() => {
    allCaseStudies = document.querySelectorAll('.case-study');
    toogleTag('All');
    setCasesToShow(allCaseStudies);
  },[]);

  const toogleTag = (tag) => {
    setShowMe(!showMe);
    setActiveTag(tag)
    allCaseStudies = document.querySelectorAll('.case-study');
    setCasesToShow([])
    // console.log('All', allCaseStudies)
    for (const caseStudy of allCaseStudies) {
      caseStudy.style.display = "none";
      caseStudy.classList.remove("hide");
      caseStudy.classList.remove("show");
    }
    for (const caseStudy of allCaseStudies) {
      if(tag === 'All') {
        caseStudy.style.display = "flex";
        // caseStudy.classList.add("show");
        // caseStudy.classList.remove("hide");

        setCasesToShow([...casesToShow, caseStudy])
      }
      else{
        const tags = caseStudy.dataset.tags;
        if(tags.includes(tag)) {
          setCasesToShow([...casesToShow, caseStudy])
          caseStudy.style.display = "flex";
          // caseStudy.classList.add("show");
          // caseStudy.classList.remove("hide");

          // caseStudy.classList.remove("hide");
        } else {
          var casesArray = [...casesToShow]
          setCasesToShow(casesArray.filter(item => item !== caseStudy));
          // caseStudy.classList.add("hide");
          // caseStudy.classList.remove("show");
          caseStudy.style.display = "none";

          // caseStudy.classList.remove("show");
          // caseStudy.classList.add("hide");
        }
      }
    }
    // const casesToShowArray = [...casesToShow]

    // for (const caseStudy of casesToShowArray) {
    //   console.log('adding Show Class', caseStudy)
  
    //     caseStudy.classList.remove("hide");
    //         caseStudy.classList.add("show");
    //   }
  }

  // useEffect(() => {
  //   allCaseStudies = document.querySelectorAll('.case-study');
  //   for (const caseStudy of allCaseStudies) {
  //       if(activeTag === 'All') {
  //         // caseStudy.style.display = "flex";
  //         caseStudy.classList.add("show");
  //         caseStudy.classList.remove("hide");

  //         setCasesToShow([...casesToShow, caseStudy])
  //       } else {
  //         const tags = caseStudy.dataset.tags;
  //         if(tags.includes(activeTag)) {
  //           setCasesToShow([...casesToShow, caseStudy])
  //           // caseStudy.style.display = "flex";
  //           caseStudy.classList.add("show");
  //           caseStudy.classList.remove("hide");

  //           // caseStudy.classList.remove("hide");
  //         } else {
  //           var casesArray = [...casesToShow]
  //           setCasesToShow(casesArray.filter(item => item !== caseStudy));
  //           caseStudy.classList.add("hide");
  //           caseStudy.classList.remove("show");
  //           // caseStudy.style.display = "none";

  //           // caseStudy.classList.remove("show");
  //           // caseStudy.classList.add("hide");
  //         }
  //     }
  // }
    
  // },[showMe]);

  return (
      <div className={rootClassName}>
          <div className={`${rootClassName}__title`}>
            We work with a <strong>diverse team</strong> of <strong>talented</strong> <br />
            individuals that work closely with <strong>our</strong> <br />
            <strong>clients</strong> to solve <strong>complex</strong> problems.
          </div>
          <div className={`${rootClassName}__tags`}>
            <Tag className={`${ activeTag === 'All' ? 'active' : ''  }`} onClick={()=>{ toogleTag('All') }} >All</Tag>
            <Tag className={`${ activeTag === 'Design Development' ? 'active' : ''  }`} onClick={()=>{ toogleTag('Design Development') }} >Design Development</Tag>
            <Tag className={`${ activeTag === 'Strategy' ? 'active' : ''  }`} onClick={()=>{ toogleTag('Strategy') }} >Strategy</Tag>
            <Tag className={`${ activeTag === 'Consultancy' ? 'active' : ''  }`} onClick={()=>{ toogleTag('Consultancy') }} >Consultancy</Tag>
          </div>
          <div className={`${rootClassName}__case-studies`}>
            <div className={`${rootClassName}__case-studies__content`}>
            {parsedProjects.map((project) => (
              <CaseStudy key={project.id} projectID={project.id} project={project.attributes} data-tags={project.categories}/>
              // <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="consult" data-tags={['Consultancy']}/>
              // <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="other" data-tags={['Strategy', 'Design Development']}/>
              // <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="lectures" data-tags={['Consultancy']}/>
              // <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="moov" data-tags={['Design Development']}/>
              // <CaseStudy onClick={()=>{  window.location.href='work/moov' } }caseName="eazup" data-tags={['Strategy', 'Design Development']}/>
            ))}
            </div>
          </div>

      </div>
  );
}

export async function getStaticProps() {
  const projectsItems = await fetchFromCMS('projects');
  const parsedProjects = [];
  projectsItems.data.forEach((project) => {
    if (!project) return
    parsedProjects.push({
      id: project.id,
      attributes: project.attributes,
      categories: project.attributes.categories.data.map((category) => { return(category.attributes.tagName) })
    })
  });
  return {
    props: { projectsItems, parsedProjects },
    revalidate: 1,
  };
}