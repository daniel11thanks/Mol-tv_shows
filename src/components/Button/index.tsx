import { MouseEventHandler } from 'react';
import './styles.css';

type Props = {
    label: string;
    operation: string;
    click: MouseEventHandler;
}

function Button( {label, operation, click} : Props) {
    
    
    return (
        <button className={`
        buttom
        ${operation === 'search' ? 'mol-orange-btn' : '' }
        ${operation === 'reset' ? 'mol-purple-btn' : '' }
        `} onClick = {click}>
           {label}
        </button>
    )
}

export default Button
