import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.textBlock}><h1 className= {s.name}>Alex Smith</h1>
                <p className={s.text}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum
                    gravida,
                    odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
                    placerat
                    sapien pretium eu.</p>
            </div>
            <div className={s.photo}>photo</div>

        </div>
    );
};

export default Main;