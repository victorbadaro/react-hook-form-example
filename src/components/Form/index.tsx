import { SubmitHandler, useForm } from 'react-hook-form';

interface FormFields {
	name: string;
	email: string;
	password: string;
}

export function Form() {
	const { register, handleSubmit } = useForm<FormFields>();
	const onFormSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<input type="text" {...register('name')} placeholder="Name" />
			<input type="email" {...register('email')} placeholder="Email" />
			<input type="password" {...register('password')} placeholder="Password" />

			<button type="submit">Save</button>
		</form>
	);
}
