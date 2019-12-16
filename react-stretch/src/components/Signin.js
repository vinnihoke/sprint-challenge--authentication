import React from 'react'
import axios from 'axios'
import useForm from 'react-hook-form';

const Signin = (props) => {
	const { addCurrentuser } = props
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		axios.post("http://localhost:4200/api/auth/login", data, { withCredentials: true })
			.then(res => {
				alert(`Successful Login!`)
				addCurrentuser(res.data)
			})
			.catch(err => console.log(err.message))
	};
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Username" name="Username" ref={register({ required: true, maxLength: 80 })} />
			<input type="text" placeholder="Password" name="Password" ref={register({ required: true })} />

			<input type="submit" />
		</form>
	);
}

export default Signin
