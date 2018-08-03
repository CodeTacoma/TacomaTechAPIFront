export default(state = null, action) => {
  const {type, payload} = action;
  switch (type) {

    case 'business_SET':
      return payload;
    case 'business_CREATE':
      return [
        payload, ...state
      ];
    case 'business_UPDATE':
      return state.map(item => (item.id === payload.id
        ? payload
        : item));
    case 'business_DELETE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
