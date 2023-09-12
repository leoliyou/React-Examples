import PropTypes from 'prop-types'

function Popup(props) {

    return (
      <div>
            <div>{props.children}</div>
            <button onClick={() => { props.onClose()}}>close</button>
      </div>
    );
}
Popup.propType = {
    onClose:PropTypes.func
}
Popup.defaultProps = {
    onClose: () => { }
}


export default Popup