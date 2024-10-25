import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/Firebase";
import { useNavigate } from "react-router-dom";
import '../Auth.css'; // Importing custom CSS for styling

function Signup() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			localStorage.setItem('loggedin', true);
			alert('User created!');
			navigate('/home');
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="form-container">
			<h2>Sign Up</h2>
			<form onSubmit={handleSignup}>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default Signup;
