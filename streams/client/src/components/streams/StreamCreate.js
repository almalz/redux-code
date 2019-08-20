import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { addStream } from '../../actions'

class StreamCreate extends Component {
  StreamSchema = Yup.object().shape({
    title: Yup.string().required('You must enter a title'),
    description: Yup.string().required('You must enter a description')
  })

  handleSubmit = (values, action) => {
    this.props.addStream(values)
  }

  renderInput = ({ field, form, label }) => {
    const classname = `field ${
      form.errors[field.name] && form.touched[field.name] ? 'error' : ''
    }`

    return (
      <div className={classname}>
        <label>{label}</label>
        <input {...field} type="text" />
      </div>
    )
  }

  render() {
    return (
      <Formik
        initialValues={{ title: '', description: '' }}
        onSubmit={this.handleSubmit}
        validationSchema={this.StreamSchema}
        render={props => (
          <Form className="ui form error" onSubmit={props.handleSubmit}>
            <Field
              type="text"
              name="title"
              label="Enter title"
              className="field error"
              component={this.renderInput}
            />
            <ErrorMessage name="title" className="ui error message">
              {error => (
                <div className="ui error message ">
                  <div className="header">{error}</div>
                </div>
              )}
            </ErrorMessage>
            <Field
              type="text"
              name="description"
              label="Enter description"
              className="field error"
              component={this.renderInput}
            />
            <ErrorMessage name="description">
              {error => (
                <div className="ui error message ">
                  <div className="header">{error}</div>
                </div>
              )}
            </ErrorMessage>
            <button
              className="ui button primary"
              type="submit"
              style={{ display: 'block', marginTop: '8px' }}
            >
              Create Stream
            </button>
          </Form>
        )}
      />
    )
  }
}

const mapStateToProps = state => {
  return { title: state.form.title, description: state.form.description }
}

export default connect(
  mapStateToProps,
  { addStream }
)(StreamCreate)
