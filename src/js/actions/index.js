import * as types from "../constants/action-types";
import "whatwg-fetch";

export const clearHeroEdit = () => {
	return {
		type: types.CLEAR_HERO_EDIT,
	};
};

function updatingHero(updateHero) {
  return {
    type: types.UPDATING_HERO,
    updateHero: updateHero
  };
}

export const updateHero = updateHero => dispatch => {
  const URL = `/api/heros/${updateHero._id}`;
  dispatch(updatingHero(updateHero));
  fetch(URL, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateHero)
  }).then(response => {
    if (!response.ok) {
      response.json().then(error => {
        alert(`Failed to update hero: ${error}`);
        dispatch({
          type: types.UPDATING_HERO_FAIL,
          payload: error,
          error: true
        });
      });
    } else {
      response.json().then(data => {
	      console.log('data ');
	      console.log(data);
        dispatch({
          type: types.UPDATING_HERO_SUCCESS,
          updatedHero: data
        });
      });
    }
  });
};

function requestHero(URL) {
  return {
    type: types.FETCHING_HERO,
    url: URL
  };
}

export const fetchHero = URL => dispatch => {
  dispatch(requestHero(URL));
  fetch(URL).then(response => {
    if (!response.ok) {
      response.json().then(error => {
        alert(`Failed to fetch hero: ${error.message}`);
        dispatch({
          type: types.FETCHING_HERO_FAIL,
          payload: error,
          error: true
        });
      });
    } else {
      response.json().then(data => {
        dispatch({
          type: types.FETCHING_HERO_SUCCESS,
          edithero: data
        });
      });
    }
  });
};

function deletingHero(heroID) {
  return {
    type: types.DELETING_HEROS_START,
    id: heroID
  };
}

export const deleteHero = heroID => {
  return function(dispatch, getState) {
    dispatch(deletingHero(heroID));
    fetch(`/api/heros/${heroID}`, { method: "DELETE" }).then(response => {
      if (!response.ok) {
        alert("Failed to delete issue");
        dispatch({
          type: types.DELETING_HEROS_FAIL,
          payload: response.status,
          error: true
        });
      } else {
        dispatch({
          type: types.DELETING_HEROS_SUCCESS,
          heroID: heroID
        });
      }
    });
  };
};

function creatingHero(newHero) {
  return {
    type: types.CREATE_HERO,
    payload: newHero
  };
}

export const createHero = newHero => {
  return function(dispatch, getState) {
    dispatch(creatingHero(newHero));
    fetch("/api/heros", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newHero)
    }).then(response => {
      if (response.ok) {
        response.json().then(updatedHero => {
          updatedHero.created = new Date(updatedHero.created);
          dispatch({
            type: types.CREATING_HERO_SUCCESS,
            hero: updatedHero
          });
        });
      } else {
        response.json().then(error => {
          alert(`Failed to create hero: ${error.message}`);
          dispatch({
            type: types.FETCHING_HEROS_FAIL,
            payload: error,
            error: true
          });
        });
      }
    });
  };
};

function requestHerosList(URL) {
  return {
    type: types.FETCHING_HEROS,
    url: URL
  };
}

export const fetchHeros = (filter = "") => dispatch => {
  dispatch(requestHerosList(filter));
  fetch(`/api/heros${filter}`).then(response => {
    if (response.ok) {
      response.json().then(data => {
        dispatch({
          type: types.FETCHING_HEROS_SUCCESS,
          heros: data.heros
        });
      });
    } else {
      response.json().then(error => {
        alert(`Failed to fetch heros: ${error.message}`);
        dispatch({
          type: types.FETCHING_HEROS_FAIL,
          payload: error,
          error: true
        });
      });
    }
  });
};
