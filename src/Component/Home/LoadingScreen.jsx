import styles from "./LoadingScreen.module.scss";
export default function LoadingScreen() {
    return (
        <div className={styles.loader}>
            <div className={styles.spinner}>
                <span></span>
            </div>

            <h2 className={styles.title}>ORANGE PR</h2>
            <p className={styles.subtitle}>Think. Create. Promote.</p>
        </div>
    );
}