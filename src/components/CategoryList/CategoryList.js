import styles from './CategoryList.module.scss';

export default function CategoryList({ categories, activeCat, setActiveCat,setSearchTerm }) {
	function handleClick(cat){
		setActiveCat(cat)
		setSearchTerm('')
	}
	const cats = categories.map((cat) => (
		<li
			key={cat}
			className={cat === activeCat ? styles.active : ''}
			// FYI, the below will also work, but will give a warning
			// className={cat === activeCat && 'active'}
			onClick={() => handleClick(cat)}
		>
			{cat}
		</li>
	));
	return <ul className={styles.CategoryList}>{cats}</ul>;
}
