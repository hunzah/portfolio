import React from 'react';
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import ava from '../assets/images/photo_2023-07-13_19-22-53.jpg'
import DividerSpace from '../common/components/dividerSpace/DividerSpace';


const photo = {backgroundImage: `url(${ava})`}

const Main = () => {
    return (
        <div id={'aboutMe'} className={s.main}>
            <div className={`${s.container} ${stylesContainer.container}`}>
                <div className={s.photoWrap} style={photo}></div>
                <div className={s.textBlock}>
                    <h1 className={s.name}>Yusup Magomedov</h1>
                    <p className={s.text}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
                        risus
                        non condimentum
                        gravida,
                        odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
                        placerat
                        sapien pretium eu.</p>
                </div>
                <DividerSpace/>
            </div>

        </div>
    );
};

export default Main;