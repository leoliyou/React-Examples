function Popup(props) {

    return (
      <div>
            <div>{props.children}</div>
            <button onClick={() => { props.onClose()}}>close</button>
      </div>
    );
}

export default Popup