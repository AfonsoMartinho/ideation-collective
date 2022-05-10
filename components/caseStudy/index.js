import React from 'react'
import Tag from "../tag";

export default function caseStudy(props) {
    const rootClassName = 'case-study';
    return (
        props.project
        && (
        <div data-tags={props['data-tags']} className={`${rootClassName} ${props.className || ''}`} >
            { props.project.Thumbnail.data && <img src={`${props.project.Thumbnail.data.attributes.url}`} className={`${rootClassName}__thumbnail`} alt="thumbnail" /> }
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
    )
}