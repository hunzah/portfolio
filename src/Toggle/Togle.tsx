import React, {useState} from 'react';
import s from './Toggle.module.scss';


type PropsType = {
    value: boolean;
    onChange: (value: any) => void;
}

export const Toggle = ({ value, onChange }: PropsType) => {
    const [isChecked, setIsChecked] = useState(value);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        onChange(!isChecked);
    };

    return (
        <label className={s.toggleTheme} htmlFor="toggler">
            <input
                id="toggler"
                type="checkbox"
                onClick={handleToggle}
                checked={isChecked}
                readOnly
            />

            <span className={isChecked ? s.checked : ""} />
            <span className={isChecked ? s.checked : ""} />

        </label>
    );
};
