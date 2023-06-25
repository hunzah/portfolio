import s from './Title.module.scss'

type PropsType = {
    title: string
    className?:string
    style?:any
}
export const Title = (props:PropsType) => {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>

    );
};

