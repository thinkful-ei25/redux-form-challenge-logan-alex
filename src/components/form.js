import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { required, isNumber } from '../validators';
import Input from './input';
import { sendFeedback } from '../actions';

class FeedbackForm extends React.Component {
  render() {
    return (
      <form onSubmit={
        this.props.handleSubmit(values => this.props.dispatch(sendFeedback(values)))
      }>
        <label htmlFor="trackingNumber">Tracking Number</label>
        <Field component={Input} element="input" type="text" name="trackingNumber" id="trackingNumber" validate={[required, isNumber]}></Field>
        <label htmlFor="issue">What is your issue?</label>
        <Field component="select" id="issue" name="issue" validate={[required]}>
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delievered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
        </Field>
        <label htmlFor="details">Give more details (optional)</label>
        <Field component="textarea" id="details" name="details"></Field>
        <button disabled={this.props.invalid}>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'feedback',
  initialValues: {
    issue: "not-delivered"
  },
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('feedback', Object.keys(errors)[0]))
})(FeedbackForm);