import React from 'react';
import {reduxForm, Field} from 'redux-form';

class FeedbackForm extends React.Component{
  render() {
    return(
      <form>
        <label htmlFor="tracking-number">Tracking Number</label>
        <Field component="input" type="text" name="tracking-number" id="tracking-number"></Field>
        <label htmlFor="issue">What is your issue?</label>
        <Field component="select" id="issue">
          <option value="My delivery hasn\'t arrived">My delivery hasn't arrived</option>
          <option value="The wrong item was delievered">The wrong item was delievered</option>
          <option value="Part of my order was missing">Part of my order was missing</option>
          <option value="Some of my order arrived damaged">Some of my order arrived damaged</option>
          <option value="Other">Other (give details below)</option>
        </Field>
        <label htmlFor="details">Give more details (optional)</label>
        <Field component="textarea" id="details"></Field>
        <button>Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'feedback'
})(FeedbackForm);