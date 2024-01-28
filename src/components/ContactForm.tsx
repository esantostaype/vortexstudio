import { Formik, Form, type FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '../components';
import { Arrow } from './ui/Icons';

interface FormData {
	fullName: string,
    phone: string,
    email: string,
    comments: string
}

const SignupSchema = Yup.object().shape({
	fullName: Yup.string()
		.min( 2, 'Tu nombre completo debe tener al menos 2 caracteres' )
		.max( 48, 'Tu nombre completo no debe ser mayor a 48 caracteres' )
		.required( 'Este campo es requerido' ),
	phone: Yup.string()
		.matches(/^[9]\d{8}$/, 'No es teléfono válido')
		.required( 'Este campo es requerido' ),
	email: Yup.string()
		.email('No es un Email válido')
		.required( 'Este campo es requerido' ),
	comments: Yup.string()
		.required( 'Este campo es requerido' ),
	
});

export const ContactForm = () => {

    return (
        <Formik
			initialValues={{
				fullName: '',
				phone: '',
				email: '',
				comments: ''
			}}
			validationSchema={ SignupSchema }
			onSubmit={
				async( values: FormData ) => {
					await fetch(
						`https://vortex-strapi-production.up.railway.app/api/contacts`,
						{
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify({
								data: {
									fullName: values.fullName,
									phone: values.phone,
									email: values.email,
									comments: values.comments
								}
							}),
							method: 'POST'
						}
					);
				}
			}
			>
			{({ errors, touched, values }) => (
				<Form className='form'>
					<div className='form__item__full'>
						<TextField
							label="Nombre Completo"
							type="text"
							name="fullName"
							placeholder="Ingresa tu Nombre Completo"
							errors={ errors.fullName }
							touched={ touched.fullName }
							value={ values.fullName }
						/>
					</div>
					<div className='form__item'>
						<TextField
							label="Teléfono"
							type="text"
							name="phone"
							placeholder="Ingresa tu Teléfono"
							errors={ errors.phone }
							touched={ touched.phone }
							value={ values.phone }
						/>
					</div>
					<div className='form__item'>
						<TextField
							label="Email"
							type="text"
							name="email"
							placeholder="Ingresa tu Email"
							errors={ errors.email }
							touched={ touched.email }
							value={ values.email }
						/>
					</div>
					<div className='form__item__full'>
						<TextField
							typeField="textarea"
							label="Comentarios"
							type="text"
							name="comments"
							placeholder="Ingresa tus Comentarios"
							errors={ errors.comments }
							touched={ touched.comments }
							value={ values.comments }
						/>
					</div>
					<div className='form__item__full'>
						<Button label='Enviar Información' size='main' />
					</div>
				</Form>
			)}
		</Formik>
    )
}