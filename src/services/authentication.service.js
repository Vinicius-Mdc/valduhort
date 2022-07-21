import { ValduhortAPI } from "../config/api"

export const login = async (email, senha) => {
    return new Promise((resolve, reject) => {
        ValduhortAPI().post('/usuario/login', {email, senha})
        .then((result) => {
            resolve(result.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const registro = async (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        ValduhortAPI().post('/usuario/registro', {nome, email, senha})
        .then((result) => {
            resolve(result.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export const enviaEmailRedefinirSenha = async (nome, email, senha) => {
    return new Promise((resolve, reject) => {
        ValduhortAPI().post('/usuario/registro', {nome, email, senha})
        .then((result) => {
            resolve(result.data)
        }).catch((error) => {
            reject(error)
        })
    })
}