export default function Tag(props) {
    return (
      <div className={`tag ${props.className || ''}`} onClick={()=> props.onClick()}>
          <span>{ props.children }</span>
      </div>
    );
  }
