import { TextField } from '@mui/material';
import React, { useCallback, useState } from 'react';
import ListItem from './ListItem';

function UseCallbackExampal(props) {

    const [dark, setDark] = useState(false);
    const [number, setNumber] = useState(0);

    const Theme = {
        backgroundColor: dark ? '#fff' : '#000',
        color: dark ? '#000' : '#fff'
    }

    const getItem = useCallback((i) => {
        console.log("UseCallBack Function");
        return[i+number, i+number+1, i+number+2];
    }, [number])

    return (
        <>
            <div style={Theme}>
                <button onClick={() => setDark(!dark)}>Change Theme</button>
                <TextField type="text" placeholder='Plese Enter Number' onChange={(e) => setNumber(parseInt(e.target.value))} />
            </div>

            <ListItem getItem={getItem} />
        </>
    );
}

export default UseCallbackExampal;