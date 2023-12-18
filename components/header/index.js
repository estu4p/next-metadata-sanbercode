import style from "./styles.module.css";

function Header() {
  return (
    // Styling dengan CSS Module
    <div className={style.header}>
      <p className={style.header_content}>Header</p>
    </div>
  );
}

export default Header;
