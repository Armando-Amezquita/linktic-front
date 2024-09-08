import "./inputComponent.scss"

export const InputComponent = ({ label = '', placeholder = '', change, type  }) => {
  return (
    <label className="inputComponent">
        {
            label && <span>{label}</span>
        }
        <input className="inputComponent__field" type={type}
          placeholder={placeholder} 
          name={placeholder} 
          onChange={change}
        />
    </label>
  )
}
