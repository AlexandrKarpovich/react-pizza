import React, {useState} from "react";


// class Categories extends React.Component {
//     state = {
//         activeItem: 1,
//     };
//
//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         });
//     }
//
//     render() {
//         const {items, onClick} = this.props;
//         console.log(this.state);
//         return (
//             <div className="categories">
//             <ul>
//                 {/*<li className="active">Все</li>*/}
//                 {
//                     items.map((name,index) => (
//                         <li
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={() => this.onSelectItem(index)}
//                             key={index}>{name}
//                         </li>
//                     ))
//                 }
//             </ul>
//         </div>
//         )
//     }
// }


function Categories({items, onClick}) {
    const [activeItem, setActiveitem] = useState(0);

    const onSelectItem = (index) => {
        setActiveitem(index)
    }

    // console.log(activeItem, setActiveitem);
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => onSelectItem(null) }>Все</li>
                { items &&
                    items.map((name,index) => (
                        <li
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                            key={index}>{name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Categories;