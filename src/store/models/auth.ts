export interface ILoginRequest {
    email: string | null;
    password: string | null;
}

export interface ILoginResponse {
    access: string;
}

export interface IRegisterRequest {
    email: string | null;
    password: string | null;
}

export interface IRegisterResponse {
    status: string;
}