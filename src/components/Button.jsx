import React from "react";
import classnames from 'classnames'

// class Button extends React.Component {
//     componentDidMount() {
//         console.log('Отобразился')
//     }
//
//     render() {
//         return (
//             <button className={classnames('button', {
//                 'button--outline': this.props.outline,
//             })}>{this.props.children}</button>
//         )
//     }
// }

function Button ({onClick, className, outline, children}) {
    return (
        <button
            onClick={onClick}
            className={classnames('button', className, {
                'button--outline': outline,
            })}>
            {children}
        </button>
    )
}

export default Button;