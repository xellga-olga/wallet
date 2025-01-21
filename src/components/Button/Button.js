import './Button.scss'

export const Button = (props) => {
    const { onClick, children } = props;

    return (
        <div className='button' onClick={onClick} onClick={onClick}>
           <span>{children}</span>
        </div>
    )
}