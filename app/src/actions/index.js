import * as types from '../constants/ActionTypes';

export function addRoute(routeName, routeType) {
  return { type: types.ADD_ROUTE, routeName, routeType };
}

export function deleteRoute(id) {
  return { type: types.DELETE_ROUTE, id };
}

export function editRoute(id, routeName, routeType) {
  return { type: types.EDIT_ROUTE, id, routeName, routeType };
}
