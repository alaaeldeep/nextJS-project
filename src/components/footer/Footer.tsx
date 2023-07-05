import Image from "next/image";
import styles from "./page.module.css";
const Footer = () => {
    return (
        <div className={styles.container}>
            <div>©2023 Alaada. All rights reserved.</div>
            <div className={styles.social}>
                <Image
                    src="/1.png"
                    width={15}
                    height={15}
                    alt="alaa facebook account"
                    className={styles.icon}
                />
                <Image
                    src="/2.png"
                    width={15}
                    height={15}
                    alt="alaa instagram account"
                    className={styles.icon}
                />
                <Image
                    src="/3.png"
                    width={15}
                    height={15}
                    alt="alaa twitter account"
                    className={styles.icon}
                />
                <Image
                    src="/4.png"
                    width={15}
                    height={15}
                    alt="alaa youtube account"
                    className={styles.icon}
                />
            </div>
        </div>
    );
};

export default Footer;
