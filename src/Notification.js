function Notification(props) {
    return (
        <div >
            <h2>
                { props.title}
           </h2>
            <p>
                {props.message}
           </p>

        </div>
    )
}

export default  Notification