import axiosInstance from '@/service/axios'

export enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
	TAX_ACCOUNTANT = 'TAX_ACCOUNTANT',
}
export type UserResponse = {
	username: string
	email: string
	roles: UserRole
}

export const getAuthData = async (): Promise<UserResponse> => {
	const response = await axiosInstance.get<UserResponse>('auth/profile')
	return response.data
}
