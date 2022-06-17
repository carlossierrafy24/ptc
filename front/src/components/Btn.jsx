import React from 'react'

const BtnConfirm = ({text, cback}) => {
    return (
        <button className="btn" onClick={cback}>
            <span className="btn__text">
                {text}
            </span>
        </button>
    )
}

const BtnCancel = ({text, cback}) => {
    return(
        <button className="btn2" onClick={cback}>
            <span className="btn__text">
                {text}
            </span>
        </button>
    )
}

const BtnInfo = ({text, cback}) => {
    return(
        <button className="btn3" onClick={cback}>
            <span className="btn__text">
                {text}
            </span>
        </button>
    )
}

function Btn(props) {
  return (
    <React.Fragment>
        {props.type === 'confirm' && <BtnConfirm text={props.text} cback={props.cback} />}
        {props.type === 'cancel' && <BtnCancel text={props.text} cback={props.cback} />}
        {props.type === 'info' && <BtnInfo text={props.text} cback={props.cback} />}
    </React.Fragment>
  )
}

export default Btn