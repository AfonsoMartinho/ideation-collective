import React from 'react'
import Tag from "../tag";

export default function caseStudy(props) {
    const rootClassName = 'case-study';
    return (
        <div data-tags={props['data-tags']} className={`${rootClassName} ${props.caseName  || ''} ${props.className || ''}`} onClick={()=> props.onClick()}>
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
        </div>
    )
}