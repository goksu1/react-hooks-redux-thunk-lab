export function fetchCats() {

    return (dispatch) => {
        dispatch({
          type: 'cats/catsLoading',
        });
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            dispatch({
              type: 'cats/catsLoaded',
              payload: data.images, // cat data from the cat API
            });
          });
      };
    }
    const initialState = {
        entities: [], // array of cats
        status: 'idle', // loading state
      };
      
      export default function catsReducer(state = initialState, action) {
        switch (action.type) {
          case 'cats/catsLoading':
            return {
              ...state,
              status: 'loading',
            };
          case 'cats/catsLoaded':
            return {
              ...state,
              entities: action.payload,
              status: 'idle',
            };
          default:
            return state;
        }
      }