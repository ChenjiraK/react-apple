export type ILogin = {
    username?: string
    email?: string
    password: string
}
export type IRegister = {
    username: string
    email: string
    password: string
    confirmPassword: string
    firstname: string
    lastname: string
    phoneNumber: string,
    birthdate: Date | string | null
}
export type IProfile = {
    email: string
    phoneNumber: string
    firstname: string
    lastname: string
    birthdate: Date | string | null
}