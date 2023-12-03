import './Form.scss'
function Form(){
    return(
        <form className="input">
          <input type="text" placeholder="Add a new item"/>
          <button type='submit'>Add</button>
        </form>
    )
}

export default Form