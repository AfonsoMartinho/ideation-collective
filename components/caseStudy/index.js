import React from 'react'
import Tag from "../tag";
import Constants from '/constants.json'

export default function caseStudy(props) {
    const rootClassName = 'case-study';
    return (
        <div data-tags={props['data-tags']} className={`${rootClassName} ${props.className || ''}`} >
            <img src={`${Constants.STRAPI_DOMAIN}${props.project.Thumbnail.data.attributes.url}`} className={`${rootClassName}__thumbnail`} alt="thumbnail" />
            <a as={`/work/${props.projectID}`} href={`/work/${props.projectID}`}>
                { props['data-tags'] 
                && (
                <div className={`${rootClassName}__tags`}>
                    {props['data-tags'].map( (tag, i) =>{
                        return(
                            <Tag key={i} className={`${rootClassName}__tags__tag`}>
                                { tag }
                            </Tag>
                        )
                        })
                    }
                </div>
                ) }
            </a>
        </div>
    )
}