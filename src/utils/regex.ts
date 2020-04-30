export const regexpNoParameterRequiredRoute = new RegExp('^(/\\w+)+$');
export const regexpParameterOptionalRoute = new RegExp(
  '^((/:\\w+\\?)|(/\\w+))+$'
); // Superset of above
export const regexpAnyRoute = new RegExp('^(/:?\\w+\\??)+$'); // Superset of above
