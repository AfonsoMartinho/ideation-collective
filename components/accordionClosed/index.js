export default function AccordionClosed(props) {
    const rootClassName = 'ic-accordion-closed';
    const data = props.data

    return(
        <div className={rootClassName}>
             { data
            && (
            <div className={`${rootClassName}__container`}>
                {data.map( (item, i) =>{
                    return(
                        <div key={i} className={`${rootClassName}__container__section`}>
                            <div className={`${rootClassName}__container__section__header`}>
                                <div className={`${rootClassName}__container__section__header__title`}>{item.title}</div>
                                <div className={`${rootClassName}__container__section__header__toggle`} />
                            </div>
                        </div>
                    )
                    })
                }
            </div>
            ) }
        </div>
    )
}