import React from 'react'

export default function HorizontalCarousel({ children }) {
    const rootClassName = 'h-carousel'
    return (
        <div className={rootClassName}>
            <ul className={`${rootClassName}__content`}>
                {children}
            </ul>
        </div>
    )
}
