import React from 'react';
import styles from './routeInput.css';

const RouteInput = () => (
  <section className={ styles.container }>
    <h3>Add a route</h3>
    <form action="/route/add" method="POST">
      <ul>
        <li>
          <label htmlFor="routeName">Route Name</label>
          <input type="text" name="routeName" placeholder="Route name"/>
        </li>
        <li>
          <label htmlFor="routeType">Route Type</label>
          <select name="routeType" defaultValue="rock">
            <option value="rock">Rock</option>
            <option value="boulder">Boulder</option>
            <option value="aid">Aid</option>
            <option value="ice">Ice</option>
            <option value="mixed">Mixed</option>
          </select>
        </li>
        <li>
          <button>Add</button>
        </li>
      </ul>
    </form>
  </section>
);

export default RouteInput;
