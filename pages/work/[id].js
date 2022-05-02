import Tag from "../../components/tag";
import fetchFromCMS from "/lib/service";
import Constants from '/constants.json'


export default function Project({ project, categories }) {
    const rootClassName = 'ic-moov-wrapper'
    project = project.data.attributes
    console.log(project)
    return (
            <div className={rootClassName}>
                <div className={`${rootClassName}__title`}>
                    <div className={`${rootClassName}__title__name`}>{project.Title}</div>
                    <div className={`${rootClassName}__title__text`}>{project.Description} </div>
                    <div className={`${rootClassName}__title__details`}>
                        <div className={`${rootClassName}__title__details__date`}>{project.Years}</div>
                        <a className={`${rootClassName}__title__details__website`}>{project.Website}</a>
                    </div>
                </div>
                <div className={`${rootClassName}__description`}>
                    <div className={`${rootClassName}__description__text`}>
                    {project.Header}
                    </div>
                    <div className={`${rootClassName}__description__tags`}>
                      { categories.map((categorie, index) => (
                          <Tag key={index}>{categorie}</Tag>
                      ))}
                    </div>
                </div>
                { project.Media.data &&(
                  <div className={`${rootClassName}__gallery`}>
                    {project.Media.data.map( (image, index) =>{
                      return(<img key={index} src={`${Constants.STRAPI_DOMAIN}${image.attributes.url}`} alt={image.attributes.name} />)  
                    })
                    }
                  </div>
                )}
                <div className={`${rootClassName}__final`}>
                    <div className={`${rootClassName}__final__text`}>
                    {project.FinalWords}
                    </div>
                    <div className={`${rootClassName}__final__img`}>
                        <img src="../assets/moov-ideation.png" alt="moov-ideation" />
                        { project.FinalLogo.data &&(
                          <div className={`${rootClassName}__final__img__logo`}>
                            <img src={`${Constants.STRAPI_DOMAIN}${project.FinalLogo.data.attributes.url}`} alt="moov-ideation" />
                          </div>
                        )}
                    </div>
                </div>

            </div>
    );
}

export async function getStaticPaths() {
    const projects = await fetchFromCMS('projects');
    console.log('SlugID', projects)
  return {
      paths: projects.data.map((project) => ({
        params: {
          id: JSON.stringify(project.id),
        },
      })),
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const projectItem = await fetchFromCMS(`projects/${params.id}`);
    const categories = projectItem.data.attributes.categories.data.map((category) => { return(category.attributes.tagName) });
    console.log("Project", projectItem.Media);
    // projectItem.data.forEach((project) => {
      //   if (!project) return
      //   parsedProject.push({
      //     id: project.id,
      //     attributes: project.attributes,
      //     categories: project.attributes.categories.data.map((category) => { return(category.attributes.tagName) })
      //   })
      // });
  return {
      props: { project: projectItem, categories: projectItem.data.attributes.categories.data.map((category) => { return(category.attributes.tagName) }) },
      revalidate: 1,
    };
  }