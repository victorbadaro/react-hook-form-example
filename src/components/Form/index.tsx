import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
	name: z.string().refine(data => data.trim() !== '', {
		message: 'This is a required field!'
	}),
	email: z.string().email(),
	password: z.string().min(8).max(12)
});

type FormFields = z.infer<typeof schema>;

export function Form() {
	const {
		register,
		handleSubmit,
		formState: {
			errors
		}
	} = useForm<FormFields>({
		resolver: zodResolver(schema)
	});
	const onFormSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onFormSubmit)}>
			<div>
				<input type="text" {...register('name')} placeholder="Name" />
				{errors.name?.message && <span style={{ color: 'red' }}>{errors.name?.message}</span>}
			</div>
			<div>
				<input type="email" {...register('email')} placeholder="Email" />
				{errors.email?.message && <span style={{ color: 'red' }}>{errors.email?.message}</span>}
			</div>
			<div>
				<input type="password" {...register('password')} placeholder="Password" />
				{errors.password?.message && <span style={{ color: 'red' }}>{errors.password?.message}</span>}
			</div>

			<button type="submit">Save</button>
		</form>
	);
}
