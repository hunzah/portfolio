import React from 'react';
import s from './App.module.scss'; // Возможно, вам понадобится изменить путь в зависимости от структуры вашего проекта


type PropsType = {
    value: boolean
    onChange: (value: boolean) => void
}
export const Toggle = ({value, onChange}: PropsType) => {

    // useEffect(() => {
    //     const body = document.getElementsByTagName('body')[0];
    //     if (isDarkMode) {
    //         body.classList.add(s.dark);
    //         body.classList.remove(s.light);
    //     } else {
    //         body.classList.add(s.light);
    //         body.classList.remove(s.dark);
    //     }
    //     try {
    //         localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    //     } catch (err) {
    //         console.error('Ошибка сохранения в localStorage:', err);
    //     }
    // }, [isDarkMode]);

    // const toggleDarkMode = () => {
    //     onChangesetIsDarkMode(!isDarkMode);
    // };


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


