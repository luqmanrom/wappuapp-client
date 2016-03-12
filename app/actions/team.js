'use strict';

import api from '../services/api';

const REQUEST_TEAMS = 'FETCH_TEAMS';
const RECEIVE_TEAMS = 'RECEIVE_TEAMS';
const ERROR_REQUESTING_TEAMS = 'ERROR_REQUESTING_TEAMS';

const fetchTeams = () => {
  return dispatch => {
    dispatch({ type: REQUEST_TEAMS });
    api.fetchTeams()
      .then(teams => dispatch({ type: RECEIVE_TEAMS, payload: teams }))
      .catch(e => dispatch({ type: ERROR_REQUESTING_TEAMS, error: e }));
  };
};

export {
  REQUEST_TEAMS,
  RECEIVE_TEAMS,
  ERROR_REQUESTING_TEAMS,
  fetchTeams
};