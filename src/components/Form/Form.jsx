import React from 'react';
import { observer } from 'mobx-react';
import SimpleInput from 'components/inputs/SimpleInput';

export default observer(({ form }) => (
  <form onSubmit={form.onSubmit}>
    <SimpleInput field={form.$('email')} />
    <p style={{color: "red"}}>{form.$('email').error}</p>
  </form>
));