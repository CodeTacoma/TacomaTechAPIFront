export default(state = null, action) => {
  const {type, payload} = action;
  switch (type) {

    case 'education_SET':
      return payload;
    case 'education_CREATE':
      return [
        payload, ...state
      ];
    case 'education_UPDATE':
      return state.map(item => (item.id === payload.id
        ? payload
        : item));
    case 'education_DELETE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
