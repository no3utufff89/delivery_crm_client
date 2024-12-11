export const setToken = (token: string) => {
    localStorage.setItem('Bearer', token);
  };
  
  export const getToken = (token: string) => {
    return localStorage.getItem(token);
  };
  export const getTokenFromLS = () => {
    let token: string | null = '';
    if (localStorage.getItem('Bearer')) {
      token = localStorage.getItem('Bearer');
    }
    return token;
  };
  export const deleteToken = () => {
    localStorage.removeItem('Bearer');
  };