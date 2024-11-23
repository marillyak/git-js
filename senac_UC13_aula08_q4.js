/**
 * Verifica se um usuário tem permissão para acessar o sistema.
 * 
 * @param {Object} usuario - Objeto que representa o usuário.
 * @param {number} usuario.idade - Idade do usuário.
 * @param {boolean} usuario.isAdmin - Indica se o usuário é administrador.
 * @param {boolean} usuario.isBlocked - Indica se o usuário está bloqueado.
 * @returns {boolean} Retorna true se o usuário pode acessar o sistema, ou false caso contrário.
 */

function podeAcessar(usuario) {
    const { idade, isAdmin, isBlocked } = usuario;

    if (isBlocked) {
        return false;
    }
    if (idade > 18 || isAdmin) {
        return true;
    }
    return false;
}

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }));
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  
