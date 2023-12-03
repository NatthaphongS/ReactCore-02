import './List.scss'
function List(){
    return(
        <ul className="list">
          <li className="list__item">
            <p>item-1</p>
            <button type='button'>&#x2718;</button>
          </li>
          <li className="list__item">item-2</li>
        </ul>
    )
};

export default List;