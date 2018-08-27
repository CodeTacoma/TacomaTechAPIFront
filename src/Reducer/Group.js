export default(state = null, action) => {
  const {type, payload} = action;
  switch (type) {

    case 'groups_SET':
      return payload;
    case 'groups_CREATE':
      return [
        payload, ...state
      ];
    case 'groups_UPDATE':
      return state.map(item => (item.id === payload.id
        ? payload
        : item));
    case 'groups_DELETE':
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};
