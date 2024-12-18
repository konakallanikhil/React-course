import styles from './Items.module.css'
const Items = ({listItem}) =>{
  const handleOnClickEvent = () =>{
    console.log(`${listItem} has been Brought`)
  }
  return(
    <li className={`${styles["kg-item"]} list-group-item`}>{listItem}
    <button className={`${styles["kg-button"]} btn btn-info`} onClick={handleOnClickEvent}>Buy</button>
    </li>
  )
}
export default Items