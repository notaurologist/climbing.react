import React from 'react';

import Form from '../common/Form';
import Input from '../common/Input';
import Select from '../common/Select';
import Button from '../common/Button';

import * as routeTypes from '../../constants/RouteTypes';

import {addRoute} from '../../actions';

const handleSubmit = (evt) => {
  evt.preventDefault();
  const {routeName, routeType} = evt.target;
  addRoute(routeName.value, routeType.value);
};

const RouteInput = () => (
  <section>
    <h3>Add a route</h3>
    <Form
      action="/route/add"
      onSubmit={ handleSubmit }>
      <Input
        name="routeName"
        placeholder="Route name"
        label="Route Name"
        autoComplete={ false }
        autoFocus />
      <Select
        name="routeType"
        options={ Object.values(routeTypes) }
        defaultValue={ routeTypes.ROCK }
        label="Route Type" />
      <Button type="submit">Add</Button>
    </Form>
  </section>
);

export default RouteInput;
