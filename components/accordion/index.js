export default function Accordion(props) {
    const rootClassName = 'ic-accordion';
    const data = props.data
    console.log(data);

    const toggleSection = (e) => {
        const allDecriptions = document.querySelectorAll(`.${rootClassName}__container__section__description`);
        [].forEach.call(allDecriptions, (el) => {
            if (el.previousElementSibling === e.target) return; // dont remove own active
            el.classList.remove('active');
            el.style.height = null;
        });
        if (e.target.nextElementSibling?.classList[0] === `${rootClassName}__container__section__description`) {
            e.target.nextElementSibling.classList.toggle('active');
            if (e.target.nextElementSibling.style.height) {
                // this is if the accordion is open
                e.target.nextElementSibling.style.height = null;
            } else {
                // if the accordion is currently closed
                e.target.nextElementSibling.style.height = `${e.target.nextElementSibling.scrollHeight + 20}px`;
            }
        } else { // clicked on a child div need to go to parent
            e.target.parentElement.nextElementSibling.classList.toggle('active');
            if (e.target.parentElement.nextElementSibling.style.height) {
                // this is if the accordion is open
                e.target.parentElement.nextElementSibling.style.height = null;
            } else {
                // if the accordion is currently closed
                e.target.parentElement.nextElementSibling.style.height = `${e.target.parentElement.nextElementSibling.scrollHeight + 20}px`;
            }
        }

        // add active class to chevron as well
        const allChevrons = document.querySelectorAll(`.${rootClassName}__container__section__header__toggle`);
        [].forEach.call(allChevrons, (el) => {
            if (el.parentElement === e.target) return; // dont remove own active
            el.classList.remove('active');
        });
        if (e.target.nextElementSibling?.classList[0] === `${rootClassName}__body__section__content`) {
            // clicked on the header div need to go to child chevron
            const toogleDiv = e.target.querySelector(`.${rootClassName}__container__section__header__toggle`);
            toogleDiv.classList.toggle('active');
        } else { // clicked on a child div need to go to parent
            const toogleDiv = e.target.parentElement.querySelector(`.${rootClassName}__container__section__header__toggle`);
            toogleDiv.classList.toggle('active');
        }
    };

    return(
        <div className={rootClassName}>
             { data
            && (
            <div className={`${rootClassName}__container`}>
                {data.map( (item, i) =>{
                    return(
                        <div key={i} className={`${rootClassName}__container__section`}>
                            <div className={`${rootClassName}__container__section__header`} onClick={(e) => { toggleSection(e); }}>
                                <div className={`${rootClassName}__container__section__header__title`}>{item.title}</div>
                                <div className={`${rootClassName}__container__section__header__toggle`} />
                            </div>
                            <div className={`${rootClassName}__container__section__description`}>{item.description}</div>
                        </div>
                    )
                    })
                }
            </div>
            ) }
        </div>
    )
}