import styles from "./Header.module.scss";

export default function Header(props) {
    const { type, children } = props;

    return <p className={`${styles.header} ${styles[type]} `}>{children}</p>;
}
