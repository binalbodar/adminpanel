import { createContext, useReducer } from "react";
import { ThemeReducer } from "./Reducer/theme.reducer";

const ThemeContext = createContext();

const intval={
    theme:"light"
}
export const ThemeProvider=({children})=>{
    const [start, dispatch] = useReducer(ThemeReducer, intval);
    const toogal_theme=(theme)=>{
        const newtheme = theme === 'light' ? 'dark' : 'light';
    }
}