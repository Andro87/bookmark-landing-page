import styles from "./Paragraph.module.scss";

export default function Paragraph(props) {
    const { type, children } = props;

    return <p className={`${styles.paragraph} ${styles[type]} `}>{children}</p>;
}
