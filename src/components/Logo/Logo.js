import styles from './Logo.module.scss';

export default function Logo() {
	return (
		<div className={styles.logoContainer}>
			<h1 className={styles.logoText}>Kick Quest</h1>
		</div>
	);
}
