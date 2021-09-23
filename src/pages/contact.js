import React from 'react'
import axios from 'axios'
// import Layout from '@components/Layout'
import SEO from '@components/seo'
import SectionTitle from '@components/SectionTitle'
import ErrorIcon from '@components/Icons/error-icon'
import * as styles from './contact.module.scss'

import { useGlobalStateContext, useGlobalDispatchContext } from '@context/globalContext'


/* eslint-disable jsx-a11y/accessible-emoji */
class ContactPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      fields: { name: "", email: "", subject: "", message: "" },
      errors: {},
      success: false
    };
    // console.log(this.state, props, this.context)
  }

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    // Email
    if(!fields["email"]){
       formIsValid = false;
       errors["email"] = "Email Address is required.";
    }

    // Subject
    if(!fields["subject"]){
       formIsValid = false;
       errors["subject"] = "Subject is required.";
    }

    // Message
    if(!fields["message"]){
      formIsValid = false;
      errors["message"] = "Message is required.";
   }


   this.setState({errors: errors, success: formIsValid});
   return formIsValid;
}

  handleChange = e => {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value; 
    this.setState({ fields });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    if(this.handleValidation()){
        axios
          .post(
            "https://getform.io/f/6fc5b054-a31c-4887-a100-2ff20984e7d1",
            this.state.fields,
            { headers: { Accept: "application/json" } }
          )
          .then(response => {
            // if(response.data.success)
            // console.log(response);
          })
          .catch(error => {
            // console.log(error);
          });
    }else{
      // alert("Form has errors.")
    }

    // console.log(this.state);
  }

  render() {
    return (
      // <Layout location={this.props.location}>
      <>
        <SEO title="Contact" />
        <section className="content-container">
        <SectionTitle title="CONTACT ME" subtitle="Complete the form below to contact me" id="main-content"/>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <div>
            <label className="title" htmlFor="name-field">
              Name
              <input className={styles.fieldElement} onChange={this.handleChange} id="name-field" name="name" x-autocompletetype="full-name" type="text" spellCheck="false" maxLength="30"/>
            </label>
            
          </div>
          <div>
          {this.state.errors["email"] != null &&  <div className={styles.fieldError}><ErrorIcon/>{this.state.errors["email"]}</div>}
            <label className="title" htmlFor="email-field">
              Email Address
              <span className="required" aria-hidden="true"> *</span>
              <input className={styles.fieldElement} onChange={this.handleChange} id="email-field" name="email" type="email" autoComplete="email" spellCheck="false" aria-required="true"/>
            </label>
            
          </div>
          <div>
          {this.state.errors["subject"] != null &&  <div className={styles.fieldError}><ErrorIcon/>{this.state.errors["subject"]}</div>}
            <label className="title" htmlFor="subject-field">
              Subject
              <span className="required" aria-hidden="true"> *</span>
              <input className={styles.fieldElement} onChange={this.handleChange} id="subject-field" name="subject" type="text" aria-required="true"/>
            </label>
            
          </div>
          <div>
          {this.state.errors["message"] != null &&  <div className={styles.fieldError}><ErrorIcon/>{this.state.errors["message"]}</div>} 
            <label className="title" htmlFor="message-field">
              Message
              <span className="required" aria-hidden="true"> *</span>
              <textarea className={styles.fieldElement} onChange={this.handleChange} id="message-field" name="message" type="text" aria-required="true" style={{resize: 'none'}}/>
            </label>
            
          </div>
          
          <div className={styles.formButtonWrapper}>

            {this.state.success === true && <div className={styles.fieldSuccess}>Your message has been sent. Thank you!</div>}
            <input className={styles.submitButton} type="submit" value="Submit" onMouseEnter={() => this.props.onCursor("hovered")} onMouseLeave={this.props.onCursor} />
          </div>
        </form>
        </section>
      </>
    )
  }

}

const ContactPage = ({ data }) => {

  const dispatch = useGlobalDispatchContext()
  const { cursorStyles } = useGlobalStateContext()
  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <>
      <ContactPageClass onCursor={onCursor}/>
    </>
  )
}

  
/* eslint-enable jsx-a11y/accessible-emoji */

export default ContactPage