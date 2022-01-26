
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const checkLogged = () => (dispatch) => {
    const token = localStorage.getItem('token')
  
    if (!token) return dispatch({ type: LOGOUT })
  
    return dispatch({
      type: LOGIN,
    })
  }
  
  // Para iniciar sesion
  export const setLogged = () => (dispatch) => {
    console.log('paso por aquí')
    return dispatch({
      type: LOGIN,
    })
  }
  
  // Para cerrar sesion
  export const logout = (dispatch) => {
    return dispatch({
      type: LOGOUT,
    })
  }