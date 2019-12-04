import { type as findSuggestionsType } from '../actions/findSuggestions';
import items from '../../data/items';

const defaulState = [];

function reducer(state = defaulState, { type, payload }) {
  switch (type) {
    case findSuggestionsType: {
      const regex = new RegExp(`^${payload}`, 'i');
      return items.filter((n) => regex.test(n.title));
    }
    default:
      return state;
  }
}

export default reducer;
