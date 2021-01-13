import styles from "./ButtonSlide.module.scss";

export default function ButtonSlide(props) {
    const { name, position, onClick } = props;

    return (
        <button
            type="button"
            title="button"
            className={`${styles.text_button} ${
                position ? styles.chosen : null
            }`}
            onClick={onClick}
        >
            {name.title}
        </button>
    );
}
