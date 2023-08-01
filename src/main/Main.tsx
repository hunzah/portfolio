import React from 'react';
import s from './Main.module.scss'
import stylesContainer from '../common/styles/Container.module.css'
import ava from '../assets/images/ava.jpg'
import DividerSpace from '../common/components/dividerSpace/DividerSpace';
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';

const photo = {backgroundImage: `url(${ava})`}

const Main = () => {
    return (
        <div id={'aboutMe'} className={s.main}>
            <div className={`${s.container} ${stylesContainer.container}`}>
                <div className={s.photoWrap} style={photo}></div>
                <div className={s.textBlock}>
                    <div className={s.typingText}>
                        <ReactTypingEffect text={'Frontend Developer'}/>
                    </div>
                    <h1 className={s.name}>Yusup Magomedov</h1>

                    <p> Hello, I am frontend developer. I have experience in React,
                        ReactNative, Redux, TypeScript development. processes. I
                        improving my skills in this direction
                        and plan to expand them with new
                        technologies, such as Angular.
                        I usually spend my free time
                        reading IT-literature,
                        Codewars and improving my
                        English. <div>Open to your suggestions.</div>
                    </p>
                </div>
                <DividerSpace/>
            </div>

        </div>
    )
        ;
};

export default Main;