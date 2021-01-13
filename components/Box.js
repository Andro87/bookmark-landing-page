import styles from "./Box.module.scss";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";

export default function Box(props) {
    const { logo, company, version, margin } = props;

    return (
        <div className={`${styles.box} ${styles[margin]}`}>
            {logo}
            <Header type="third"> {company}</Header>

            <Paragraph type="third">{version}</Paragraph>
            <hr className={styles.dot_line}></hr>

            <Button color="blue" size="big">
                Add & Install Extension
            </Button>
        </div>
    );
}
