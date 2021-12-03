import Head from "next/head";
import Button from "../components/button";
import Tag from "../components/tag";

export default function Home() {
  const rootClassName = 'ic-home-wrapper'
  return (
    <div className="container">
      <Head>
        <title>Ideation Collective</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={rootClassName}>
            <div className={`${rootClassName}__title`}>
              <div className={`${rootClassName}__title__row`}>
                <span>We turn</span>
                <img className={`${rootClassName}__title__row__gif1`} src="assets/title1.gif"></img>
                <span>design</span>
              </div>
              <div className={`${rootClassName}__title__row`}>
                <img className={`${rootClassName}__title__row__gif2`} src="assets/title2.gif"></img>
                <span>into a</span>
                <img className={`${rootClassName}__title__row__gif3`} src="assets/title3.gif"></img>
              </div>
              <div className={`${rootClassName}__title__row`}>
                <span>competetive advantage.</span>
              </div>
            </div>
            <div className={`${rootClassName}__subtitle`}>
              <span>In other words, we build <strong>innovations</strong> that deliver a </span>
              <span><strong>remarkable customer experience.</strong></span>
            </div>
        </div>
      </main>
    </div>
  );
}
