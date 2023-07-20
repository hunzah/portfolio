import React from 'react';
import s from './Nav.module.scss'
// @ts-ignore
import * as Scroll from 'react-scroll';

let Link = Scroll.Link;

const Nav = () => {
    return (
        <div className={s.container}>
            <ul className={s.navList}>

                <li><Link
                    to={'aboutMe'}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={800}
                    isDynamic={true}>About me</Link></li>

                <li><Link
                    to={'skills'}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={800}
                    isDynamic={true}>Skills</Link></li>

                <li><Link
                    to={'projects'}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-50}
                    duration={800}
                    isDynamic={true}>Projects</Link></li>

                <li><Link
                    to={'contacts'}
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-70}
                    duration={800}
                    isDynamic={true}>Contacts</Link></li>
            </ul>
        </div>
    );
};
export default Nav;