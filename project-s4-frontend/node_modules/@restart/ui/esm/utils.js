/* eslint-disable import/prefer-default-export */
export function isEscKey(e) {
  return e.code === 'Escape' || e.keyCode === 27;
}