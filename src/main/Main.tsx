import React from 'react';
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import sanAndreas from '../assets/images/SanAndreas.jpg'
import DividerSpace from '../common/components/dividerSpace/DividerSpace';


const photo = {backgroundImage: `url(${sanAndreas})`}

const Main = () => {
    return (
        <div className={s.main}>
            <div className={`${s.container} ${stylesContainer.container}`}>
                <div className={s.photoWrap} style={photo}>  </div>
                <div className={s.textBlock}>
                    <h1 className={s.name}>Alex Smith</h1>
                    <p className={s.text}>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
                        risus
                        non condimentum
                        gravida,
                        odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a
                        placerat
                        sapien pretium eu.</p>
                </div>

            </div>

        </div>
    );
};

export default Main;