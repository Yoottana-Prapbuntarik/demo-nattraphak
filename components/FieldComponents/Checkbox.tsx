import { Fragment } from "react";
const CheckBox = ({ input, label, type, style, valueDisable }: any) => {
    return (
        <Fragment>
            <input
                id="check"
                disabled={valueDisable}
                {...input}
                className={style}
                type={type}
                name={label}
                value={label}
            />
        </Fragment>
    )
}

export default CheckBox
