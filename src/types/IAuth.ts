export type ILogin = {
    email?: string
    password: string
}
export type IRegister = {
    email: string
    password: string
    confirmPassword: string
    firstname: string
    lastname: string
    phoneNumber: string,
    birthdate: Date | string | null
}
export type IProfile = {
    id: number | null
    email: string
    phoneNumber: string
    firstname: string
    lastname: string
    birthdate: any
}