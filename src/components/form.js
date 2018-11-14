import React from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { required, isNumber } from '../validators';
import Input from './input';
import { sendFeedback } from '../actions';

class FeedbackForm extends React.Component {
  render() {
    return (
      <form onSubmit={
        this.props.handleSubmit(values => sendFeedback(values))
      }>
        <label htmlFor="tracking-number">Tracking Number</label>
        <Field component={Input} element="input" type="text" name="tracking-number" id="tracking-number" validate={[required, isNumber]}></Field>
        <label htmlFor="issue">What is your issue?</label>
        <Field component="select" id="issue" name="issue">
          <option value="My delivery hasn\'t arrived">My delivery hasn't arrived</option>
          <option value="The wrong item was delievered">The wrong item was delievered</option>
          <option value="Part of my order was missing">Part of my order was missing</option>
          <option value="Some of my order arrived damaged">Some of my order arrived damaged</option>
          <option value="Other">Other (give details below)</option>
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
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('feedback', Object.keys(errors)[0]))
})(FeedbackForm);