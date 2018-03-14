import React from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField'

export default observer(({ field, type = 'text', placeholder = null }) => (
        <TextField
        {...field.bind({ type, placeholder })}
        />
));