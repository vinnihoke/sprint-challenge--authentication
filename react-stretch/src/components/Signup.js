import React from 'react'
import useForm from 'react-hook-form';

const Signup = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSubmit = data => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Username" name="Username" ref={register({ required: true, maxLength: 80 })} />
			<input type="text" placeholder="Password" name="Password" ref={register({ required: true })} />

			<input type="submit" />
		</form>
	);
}

export default Signup
