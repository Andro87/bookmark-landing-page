import styles from "./Button.module.scss";

export default function Button(props) {
    const { color, size, children } = props;

    return (
        <button
            type="button"
            title="button"
            className={`${styles.button} ${styles[color]} ${styles[size]}`}
        >
            {children}
        </button>
    );
}
