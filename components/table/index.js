import React from 'react'

export default function HorizontalCarousel({ data }) {
    const rootClassName = 'ic-table'
    console.log(data);
    return (
        <div className={rootClassName}>
            <div className={`${rootClassName}__title`}>
                <strong>{data.title}</strong> Project
            </div>
            <div className={`${rootClassName}__body`}>
            { Object.keys(data.rows).map((key,i)=>{
                return (
                    <div key={i} className={`${rootClassName}__body__section`}>
                        <div className={`${rootClassName}__body__section__header`}>
                            {key}
                        </div>
                        <div className={`${rootClassName}__body__section__rows`}>
                        {data.rows[key].map( (row, i) =>{
                            return(
                                <div key={i} className={`${rootClassName}__body__section__rows__row`}>
                                    <div className={`${rootClassName}__body__section__rows__row__column1`}>
                                        {row.name}
                                    </div>
                                    <div className={`${rootClassName}__body__section__rows__row__column2`}>
                                        <span>FROM</span>{row.price}
                                    </div>
                                </div>
                            )
                            })
                        }
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}