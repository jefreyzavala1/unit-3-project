import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
export default function Logo() {
	return (
		
		<div className={styles.logoContainer}>
			<Link to='orders/new' className={styles.link}>
			<h1 className={styles.logoText}>Kick Quest</h1>
			</Link>
		</div>
	
	);
}
