import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const ContactForm = styled.form`
	width: 50%;
	margin: 0 auto;

	@media (max-width: 1200px) {
		width: 100%;
	}
	/* @media (max-width: 768px) {
		width: 80vw;
	} */
`

export const FieldLabel = styled.label`
	display: block;
	font-size: 18px;
	// color: #5c5c5c;
	text-align: left;
`

export const FieldSuccess = styled.div`
	display: block;
	border-radius: 2px;
	background: #3bcc73;
	color: #fff;
	font-size: 14px;
	line-height: 23px;
	margin: 12px 0;
	padding: 5px 15px 3px 15px;
`

export const FieldError = styled.div`
	border-radius: 2px;
	background: #ec3c3c;
	color: #fff;
	display: inline-block;
	font-size: 13px;
	line-height: 23px;
	margin: 12px 0;
	padding: 5px 15px 3px 25px;

	svg {
		position: absolute;
		margin-left: -18px;
		margin-top: 4px;
	}
`

export const RequiredField = styled.span`
	font-weight: 700;
	color: #ec3c3c;
`

const FormField = `
  text-align: left;
  display: block;
  width: 100%;
  padding: 12px;
  color: #000;
  font-size: 14px;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 2px;
  margin: 6px 0 24px;
  outline: none;
`

export const InputField = styled.input`
	${FormField}

	border: 2px solid black;
	background: ${props => props.theme.altBackground};
	color: ${props => props.theme.text};

	&:focus {
		/* background: #fff; */
		border: 2px solid ${props => props.theme.yellow};
	}
`

export const TextAreaField = styled.textarea`
	${FormField}

	border: 2px solid black;
	background: ${props => props.theme.altBackground};
	color: ${props => props.theme.text};

	/* height: 158px; */
	/* margin-top: 6px;
	margin-bottom: 4px; */
	/* resize: none; */
	resize: vertical;
	min-height: 160px;
	max-height: 300px;

	&:focus {
		/* background: #fff; */
		border: 2px solid ${props => props.theme.yellow};
	}
`
export const FormButtonWrapper = styled.div`
	text-align: center;
	margin-bottom: 60px;

	input {
		border-radius: 3px;
		border: 2px solid ${props => props.theme.text};
		color: ${props => props.theme.text};
		background-color: transparent;
		outline: none;
		// color: #000;
		// width: 130px;
		padding: 12px 37px;
		/* cursor: pointer; */
		font-size: 14px;
		font-weight: bold;
		text-transform: uppercase;
		transition: 0.1s background-color linear, 0.1s color linear;
	}

	input:hover {
		border-color: ${props => props.theme.text};
		color: ${props => props.theme.yellow};
	}

	input:active {
		background-color: ${props => props.theme.text};
	}

	/* input:focus {
		outline: 0;
	} */
`
