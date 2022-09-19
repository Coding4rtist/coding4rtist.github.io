import React from 'react'
import axios from 'axios'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
// import SectionTitle from '@components/SectionTitle'
// import ErrorIcon from '@components/Icons/error-icon'
// import * as styles from './contact.module.scss'

// Context
import {
	useGlobalStateContext,
	useGlobalDispatchContext,
} from '@context/globalContext'

import SectionTitle from '@components/sectionTitle'
import Footer from '@components/footer'
import ErrorIcon from '@components/icons/error-icon'

import { PageContent } from '@styles/globalStyles'
import {
	ContactForm,
	FieldLabel,
	FieldSuccess,
	FieldError,
	RequiredField,
	InputField,
	TextAreaField,
	FormButtonWrapper,
} from '@styles/contactStyles'

class ContactPageClass extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			fields: { name: '', email: '', subject: '', message: '' },
			errors: {},
			success: false,
		}
		console.log(this.state, props, this.context, this.props.onCursor)
	}

	handleValidation = () => {
		let fields = this.state.fields
		let errors = {}
		let formIsValid = true

		// Email
		if (!fields['email']) {
			formIsValid = false
			errors['email'] = 'Email Address is required.'
		}

		// Subject
		if (!fields['subject']) {
			formIsValid = false
			errors['subject'] = 'Subject is required.'
		}

		// Message
		if (!fields['message']) {
			formIsValid = false
			errors['message'] = 'Message is required.'
		}

		this.setState({ errors: errors, success: formIsValid })
		return formIsValid
	}

	handleChange = e => {
		let fields = this.state.fields
		fields[e.target.name] = e.target.value
		this.setState({ fields })
	}

	handleSubmit = event => {
		event.preventDefault()

		if (this.handleValidation()) {
			axios
				.post('https://formspree.io/f/mlezjqjl', this.state.fields, {
					headers: { Accept: 'application/json' },
				})
				.then(response => {
					// if(response.data.ok)
					// console.log(response)
				})
				.catch(error => {
					// console.log(error);
				})
		} else {
			// alert("Form has errors.")
		}

		// console.log(this.state);
	}

	render() {
		return (
			<>
				<SEO title="Contact" />
				<PageContent>
					<SectionTitle
						title="Contact Me"
						subtitle="Complete the form below to contact me"
					/>

					<ContactForm onSubmit={this.handleSubmit}>
						<FieldLabel htmlFor="name-field">
							Name
							<InputField
								id="name-field"
								onChange={this.handleChange}
								name="name"
								x-autocompletetype="full-name"
								type="text"
								spellCheck="false"
								maxLength="30"
							/>
						</FieldLabel>

						{this.state.errors['email'] != null && (
							<FieldError>
								<ErrorIcon />
								{this.state.errors['email']}
							</FieldError>
						)}
						<FieldLabel htmlFor="email-field">
							Email Address
							<RequiredField aria-hidden="true"> *</RequiredField>
							<InputField
								id="email-field"
								onChange={this.handleChange}
								name="email"
								type="email"
								autoComplete="email"
								spellCheck="false"
								aria-required="true"
							/>
						</FieldLabel>

						{this.state.errors['subject'] != null && (
							<FieldError>
								<ErrorIcon />
								{this.state.errors['subject']}
							</FieldError>
						)}
						<FieldLabel htmlFor="subject-field">
							Subject
							<RequiredField aria-hidden="true"> *</RequiredField>
							<InputField
								id="subject-field"
								onChange={this.handleChange}
								name="subject"
								type="text"
								aria-required="true"
							/>
						</FieldLabel>

						{this.state.errors['message'] != null && (
							<FieldError>
								<ErrorIcon />
								{this.state.errors['message']}
							</FieldError>
						)}
						<FieldLabel htmlFor="message-field">
							Message
							<RequiredField aria-hidden="true"> *</RequiredField>
							<TextAreaField
								id="message-field"
								onChange={this.handleChange}
								name="message"
								type="text"
								aria-required="true"
							/>
						</FieldLabel>

						<FormButtonWrapper>
							{this.state.success === true && (
								<FieldSuccess>
									Your message has been sent. Thank you!
								</FieldSuccess>
							)}
							<input
								type="submit"
								value="Submit"
								onMouseEnter={() => this.props.onCursor('hovered')}
								onMouseLeave={this.props.onCursor}
							/>
						</FormButtonWrapper>
					</ContactForm>

					<Footer onCursor={this.props.onCursor} />
				</PageContent>
			</>
		)
	}
}

const ContactPage = ({ data }) => {
	const dispatch = useGlobalDispatchContext()
	const { cursorStyles } = useGlobalStateContext()
	const onCursor = cursorType => {
		cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
		dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
	}

	return (
		<>
			<ContactPageClass onCursor={onCursor} />
		</>
	)
}

export default ContactPage
