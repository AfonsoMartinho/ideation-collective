import React from 'react'

export default function TestimonialCard({ logoSrc, children, name, position }) {
    const rootClassName = 'testimonial-card'
    return (
        <div className={rootClassName}>
            <img className={`${rootClassName}__logo`} src={logoSrc} />
            <div className={`${rootClassName}__content`}>{children}</div>
            <div className={`${rootClassName}__footer`}> <strong>{name}</strong>{`, ${position}`}</div>
        </div>
    )
}