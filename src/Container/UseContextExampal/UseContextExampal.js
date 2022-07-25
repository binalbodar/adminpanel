import React, { useState } from 'react';

function UseContextExampal(props) {
    const [dark, setDark] = useState();
    const [light, setLight] = useState();

    const Theme = {
        backgroundColor: dark ? '#fff' : '#000',
        color: dark ? '#000' : '#fff'
    }

    return (
        <div style={Theme}>
            <input type="radio" value="dark" name="theme" onClick={() => setDark(!dark)}/>Dark 
            <input type="radio" value="light" name="theme" onClick={() => setDark(!light)}/>Light
        </div>
    );
}

export default UseContextExampal;