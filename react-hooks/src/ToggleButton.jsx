import { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    
    return (
        <div>
            <h2>{  ? 'The button is ON' : 'The button is OFF'}</h2>
            <button onClick=
        </div>
    )

}

export default ToggleButton;