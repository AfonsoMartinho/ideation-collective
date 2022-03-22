/* eslint-disable react/jsx-key */

import Tag from "../../components/tag";
import fetchFromCMS from "/lib/service";

export default function Project({ project }) {
    const rootClassName = 'ic-moov-wrapper'
    project = project.data.attributes
    return (
            <div className={rootClassName}>
                <div className={`${rootClassName}__title`}>
                    <div className={`${rootClassName}__title__name`}>{project.title}</div>
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
                    {project.FinalWords}
                    </div>
                    <div className={`${rootClassName}__final__img`}>
                        <img src="../assets/moov-ideation.png" alt="moov-ideation" />
                        <div className={`${rootClassName}__final__img__logo`}/>
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
        // console.log('SlugID', project.id)
        params: {
          id: JSON.stringify(project.id),
        },
      })),
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const project = await fetchFromCMS(`projects/${params.id}`);
  return {
      props: { project: project },
      revalidate: 1,
    };
  }