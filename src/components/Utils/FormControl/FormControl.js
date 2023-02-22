import s from './FormControl.module.css'

export const input = ({input, label, meta: {touched, error, warning}}) => {
    const hasError = touched && error;
    return (
        <div>
            <div className={s.formControl + " " + (hasError ? s.error : "")}>
                <input {...input} placeholder={label}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}
export const textarea = ({input, label, meta: {touched, error, warning}}) => {
    const hasError = touched && error;
    return (
        <div>
            <div className={s.formControl + " " + (hasError ? s.error : "")}>
                <textarea {...input} placeholder={label}/>
                {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
}
