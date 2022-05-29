interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: "Aline",
        email: "aline.savelino@gmail.com"
    }
}

function setUser(usuario: Usuario) {
    //.....
}