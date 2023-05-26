import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.links}>
                <a>GitHub</a>
                <a>Telegram</a>
                <a>Linkedin</a>
            </div>
            <p>© 2022 All rights reserved.</p>
        </div>
    );
};

export default Footer;