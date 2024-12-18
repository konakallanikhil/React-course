import styles from './Items.module.css'
const Items = ({listItem,bought,handleByButton}) =>{

  return(
    <li className={`${styles["kg-item"]} list-group-item ${bought && 'active'}`}>
    {listItem}
    <button className={`${styles["kg-button"]} btn btn-info`} onClick={handleByButton}>Buy</button>
    </li>
  )
}
export default Items