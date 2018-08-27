export default(state = null, action) => {
  const {type, payload} = action;
  switch (type) {

    case 'events_SET':
      return payload;
    case 'events_CREATE':
      return [
        payload, ...state
      ];
    case 'events_UPDATE':
      return state.map(item => (item.id === payload.id
        ? payload
        : item));
    case 'events_DELETE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
