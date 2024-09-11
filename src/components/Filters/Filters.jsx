import { InputComponent } from "../utils/InputComponent/InputComponent"
import { Button } from "../utils/Button/Button"
import "./Filters.scss"

export const Filters = () => {
  return (
    <section className='filters'>
        <InputComponent 
            placeholder="Search"
        />
        <div className="filters__actions">
            <Button label="Best"/>
            <Button label="City"/>
        </div>
        <Button label="Search"/>
    </section>
  )
}
