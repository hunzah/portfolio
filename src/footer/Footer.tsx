import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div>
                <a href="https://github.com/hunzah">GitHub</a>
                <a href="https://t.me/Yusup_Yp">Telegram</a>
                <a href="www.linkedin.com/in/yusup-magomedov-424498278">Linkedin</a>
            </div>
            <p className={s.rights}>© 2022 All rights reserved.</p>
        </div>
    );
};

export default Footer;