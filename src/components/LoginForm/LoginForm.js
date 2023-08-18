import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import { RiLoginBoxLine } from 'react-icons/ri';
import styles from './LoginForm.module.scss';
export default function LoginForm({ setUser, showLogin, toggleLogin }) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: ''
	});
	const [error, setError] = useState('');

	function handleChange(evt) {
		setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
		setError('');
	}

	async function handleSubmit(evt) {
		// Prevent form from being submitted to the server
		evt.preventDefault();
		try {
			// The promise returned by the signUp service method
			// will resolve to the user object included in the
			// payload of the JSON Web Token (JWT)
			const user = await usersService.login(credentials);
			setUser(user);
			console.log('You have signed in');
		} catch {
			setError('Log In Failed - Try Again');
		}
	}

	return (
		<>
			<div className={styles.pageContainer}>
				<div className={styles.formContainer}>
					<div className={styles.iconContainer}>
						<RiLoginBoxLine size={32} />
					</div>
					<form autoComplete="off" onSubmit={handleSubmit}>
						<label>Email</label>
						<input
							type="text"
							name="email"
							value={credentials.email}
							onChange={handleChange}
							required
						/>
						<label>Password</label>
						<input
							type="password"
							name="password"
							value={credentials.password}
							onChange={handleChange}
							required
						/>
						<button type="submit">LOG IN</button>
					</form>
					<button className={styles.signup} onClick={toggleLogin}>
						SIGN UP
					</button>
				</div>
				<p className="error-message">&nbsp;{error}</p>
			</div>
		</>
	);
}
