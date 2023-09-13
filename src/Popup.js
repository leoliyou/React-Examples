import PropTypes from 'prop-types'

function Popup(props) {

    return (
      <div>
            <div>{props.children}</div>
            <button onClick={() => { props.onClose() }}>{props.buttonText}</button>
      </div>
    );
}
Popup.propTypes = {
  // 注意这里是 propTypes
  onClose: PropTypes.func,
  buttonText: PropTypes.string,
  children: PropTypes.node,
};

Popup.defaultProps = {
  onClose: () => {},
  buttonText: "Close",
  // 如果你还有其他默认值，也可以在这里添加
};


export default Popup