import styles from './Navigation.module.css'

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
      </ul>
    </nav>
  );
}

export default Navbar