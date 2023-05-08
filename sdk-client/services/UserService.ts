/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminSignUpDto } from '../models/AdminSignUpDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static userControllerGetAllUser(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user/admin-list',
        });
    }

    /**
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static userControllerDeleteUser(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user/delete-admin/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static userControllerCreateUser(
        requestBody: AdminSignUpDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user/admin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
