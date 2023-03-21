export default function LoadingScreen(props) {
  const rootClassName = 'loading-screen';
    return (
      <>
        <div className={`${rootClassName} ${props.className || ''}`}>
            <img src="/assets/elemento-open_purple.gif" alt="animation loader" />
        </div>
      </>
    );
  }
