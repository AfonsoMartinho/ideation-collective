import React from 'react'
import Tag from "../tag";
import Link from 'next/link';

export default function caseStudy(props) {
    const rootClassName = 'case-study';
    console.log('HEY', props['data-tags'])
    return (
        <div data-tags={props['data-tags']} className={`${rootClassName} ${props.className || ''}`} >
            <Link as={`/work/${props.projectID}`} href="/work/[id]">OI</Link> 
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