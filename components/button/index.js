export default function Button(props) {
    return (
      <>
        <div className={`button ${props.className || ''}`} onClick={()=> props.onClick()}>
            <span>{ props.children }</span>
        </div>
      </>
    );
  }
