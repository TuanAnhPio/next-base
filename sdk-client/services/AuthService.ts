/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInDto } from '../models/SignInDto';
import type { SignUpDto } from '../models/SignUpDto';
import type { TaxSignUpDto } from '../models/TaxSignUpDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerSignIn(
        requestBody: SignInDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns User Sign up api for member.
     * @throws ApiError
     */
    public static authControllerSignUp(
        requestBody: SignUpDto,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/member/sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody
     * @returns User Sign up api for tax accountant
     * @throws ApiError
     */
    public static authControllerTaxAccountSignUp(
        requestBody: TaxSignUpDto,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/tax-account/sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static authControllerGetProfile(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/profile',
        });
    }

}
