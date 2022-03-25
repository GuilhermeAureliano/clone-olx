// Processo de autenticação:
// Pode verificar se o usuário está logado, pode deslogar o usuário, e pode logar o usuário
import Cookies from "js-cookie";

export const isLogged = () => {
    let token = Cookies.get('token');

    return (token) ? true : false;
}

export const doLogin = (token, rememberPassword = false) => {
    if (rememberPassword) {
        Cookies.set('token', token, { expo
        : 999});
    } else {
        Cookies.set('token', token);
    }
}

export const doLogout = () => {
    Cookies.remove('token');
}