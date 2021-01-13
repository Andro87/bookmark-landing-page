import styles from "./Faq.module.scss";

export default function Faq(props) {
    const { question, answer } = props;
    return (
        <div className={styles.details_wrap}>
            <details className={styles.details}>
                <summary className={styles.question}>
                    {question}
                    <span className={styles.arrow}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="12"
                        >
                            <path
                                fill="none"
                                stroke="#5267DF"
                                stroke-width="3"
                                d="M1 1l8 8 8-8"
                            />
                        </svg>
                    </span>
                </summary>

                <p className={styles.answer}>{answer}</p>
            </details>
            <hr className={styles.divider}></hr>
        </div>
    );
}
