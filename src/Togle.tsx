import React from 'react';
import s from './App.module.scss';


type PropsType = {
    value: boolean
    onChange: (value: boolean) => void
}
export const Toggle = ({value, onChange}: PropsType) => {
    return (
        <label className={s.toggleTheme} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                /*@ts-ignore*/
                onClick={onChange}
                checked={value}
                readOnly
            />
            <span/>
            <span/>
        </label>
    );
};


