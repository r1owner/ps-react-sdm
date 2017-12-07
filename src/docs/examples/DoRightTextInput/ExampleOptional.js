import React from 'react';
import DoRightTextInput from 'ps-react/DoRightTextInput';

/** Optional TextBox */
export default class ExampleOptional extends React.Component {
  render() {
    return (
      <DoRightTextInput
        htmlId="example-optional"
        label="First Name"
        name="firstname"
        onChange={() => {}}
       />
    )
  }
}
