import { ThreeDots } from "react-loader-spinner"
import styles from '../Components/Loader.module.css'
function Loader() {
  return (
    <div className={styles.LoaderContainer}>
    <ThreeDots
     visible={true}
     height="100"
     width="100"
     color="#0C134F"    />
    </div>
  )
}

export default Loader