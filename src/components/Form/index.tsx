import { SubmitHandler, useForm } from 'react-hook-form';

interface FormFields {
	name: string;
	email: string;
	password: string;
}

export function Form() {
	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm<FormFields>();
	const onFormSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<div>
				<input type="text" {...register('name', {
					required: 'This field is required'
				})} placeholder="Name" />
				<span style={{ color: 'red' }}>{errors.name?.message}</span>
			</div>
			<div>
				<input type="email" {...register('email')} placeholder="Email" />
				<span>{errors.email?.message}</span>
			</div>
			<div>
				<input type="password" {...register('password')} placeholder="Password" />
				<span>{errors.password?.message}</span>
			</div>

			<button type="submit">Save</button>
		</form>
	);
}
