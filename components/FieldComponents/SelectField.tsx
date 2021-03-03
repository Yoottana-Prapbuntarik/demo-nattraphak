const SelectField = ({
  input,
  disabledState,
  name,
  label,
  currentValue,
  style,
  children,
  styleTextError,
  meta: { touched, error }
}: any) => {
  return (
    <div>
      {label !== undefined && <label className={label === null ? 'd-none' : ''}>{label}</label>}
      <div>
        <select
          className={style}
          {...input}
          value={currentValue}
          name={name}
          disabled={disabledState}
        >
          {children}
        </select>
        <p className={`${styleTextError} text-left`}>{touched && error && <span>{error}</span>}</p>
      </div>
    </div>
  )
}

export default SelectField