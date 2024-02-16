import styles from'../Components/Layout.module.css'
import { IoMdHeartHalf } from "react-icons/io";
// eslint-disable-next-line react/prop-types
function Layout({children}) {
  return (
    <>
        <header className={
            styles.header
        }>
        <h2>Shop Center</h2>
        </header>
        {children}
        <footer className={
            styles.footer
        }>
            <h4>Developed By Ashkan with  <IoMdHeartHalf /> </h4>
        </footer>
    </>
  )
}

export default Layout