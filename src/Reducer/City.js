export default(state = null, action) => {
  const {type, payload} = action;
  switch (type) {

    case 'city_SET':
      return payload;
    case 'city_CREATE':
      return [
        payload, ...state
      ];
    case 'city_UPDATE':
      return state.map(item => (item.id === payload.id
        ? payload
        : item));
    case 'city_DELETE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
