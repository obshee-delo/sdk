import { ApiAdapter } from "../../adapter";
import { CrudService } from "../../service";
import { Response } from "../../types";
import { User, UserAuthorizationResponse, UserConfirmPasswordResetRequest, UserConfirmRegistrationRequest, UserLoginRequest, UserRegisterRequest, UserResetPasswordRequest, UserRetryPasswordResetVerificationRequest, UserRetryRegistrationVerificationRequest, UserSetPasswordRequest } from "./types";


export class UserService extends CrudService<User> {
    constructor(adapter: ApiAdapter) {
        super(adapter, 'user');
    }

    public register(parameters: UserRegisterRequest): Promise<Response<User>> {
        return this.adapter.post('user/register', parameters);
    }

    public confirmRegistration(parameters: UserConfirmRegistrationRequest): Promise<UserAuthorizationResponse> {
        return this.adapter.post('user/register/confirm', parameters);
    }

    public retryRegistrationVerification(parameters: UserRetryRegistrationVerificationRequest): Promise<void> {
        return this.adapter.post('user/register/retryVerification', parameters);
    }

    public login(parameters: UserLoginRequest): Promise<UserAuthorizationResponse> {
        return this.adapter.post('user/login', parameters);
    }

    public resetPassword(parameters: UserResetPasswordRequest): Promise<void> {
        return this.adapter.post('user/resetPassword', parameters);
    }

    public confirmPasswordReset(parameters: UserConfirmPasswordResetRequest): Promise<UserAuthorizationResponse> {
        return this.adapter.post('user/resetPassword/confirm', parameters);
    }

    public retryPasswordResetVerification(parameters: UserRetryPasswordResetVerificationRequest): Promise<void> {
        return this.adapter.post('user/resetPassword/retryVerification', parameters);
    }

    public setPassword(parameters: UserSetPasswordRequest): Promise<void> {
        return this.adapter.post('user/setPassword', parameters);
    }
}
