/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AdminSignUpDto = {
    email: string;
    password: string;
    name: string;
    /**
     * ADMIN | SUB_ADMIN
     */
    role: string;
};

