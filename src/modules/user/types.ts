import { Response } from '../../types';


export type User = {
    id: string,
    password: string,
    firstName: string,
    lastName: string,
    birthday: string,
    email: string,
    phoneNumber: string,
    links: string[],
    avalaibleCourses: string[],
    finishedCourses: string[]
}

export type UserAuthorizationResponse = Response<{
    token: string
}>;

export interface UserLoginRequest {
    email: string,
    password: string
}

export type UserRegisterRequest = User;

export interface UserConfirmRegistrationRequest {
    emailVerificationCode: string
}

export interface UserRetryRegistrationVerificationRequest {
    id: string
}

export interface UserResetPasswordRequest {
    email: string
}

export interface UserConfirmPasswordResetRequest {
    emailVerificationCode: string
}

export interface UserRetryPasswordResetVerificationRequest {
    id: string
}

export interface UserSetPasswordRequest {
    id: string,
    password: string
}
