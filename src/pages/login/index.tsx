import { Checkbox, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Button from '@/components/common/button'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import axiosInstance from '@/service/axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import PageHeader from '@/components/PageHeader'
import React from 'react'
import PageFooter from '@/components/PageFooter'
import Link from 'next/link'

type IFormInput = {
	username: string
	password: string
}

type LoginResponseData = {
	access_token: string
}
export default function Login() {
	const methods = useForm<IFormInput>()
	const { control, handleSubmit } = methods
	const router = useRouter()

	const onLogin = async (data: IFormInput) => {
		const res = await axiosInstance.post<LoginResponseData>('auth/login', data)
		if (res.data.access_token) {
			Cookies.set('access_token', res.data.access_token)
			await router.push('/')
		}
	}

	return (
		<div className="flex flex-col">
			<PageHeader />
			<div className="flex login-container justify-center items-center mt-auto">
				<FormProvider {...methods}>
					<div className="h-[500px] w-[500px] shadow-[0_4px_4px_rgba(0,0,0,0.15)] p-16 text-base text-center">
						<div className="text-2xl font-bold text-center">
							「税務調査ドック」
						</div>
						<div className="mt-6">
							<Controller
								control={control}
								render={({ field }) => (
									<Input
										size="large"
										placeholder="ユーザー名"
										prefix={<UserOutlined />}
										className="rounded-sm"
										{...field}
									/>
								)}
								name="username"
							/>

							<Controller
								control={control}
								render={({ field }) => (
									<Input.Password
										className="mt-6 rounded-sm"
										size="large"
										placeholder="パスワード"
										prefix={<UserOutlined />}
										{...field}
									/>
								)}
								name="password"
							/>
						</div>
						<div className="mt-6 text-center">
							<Checkbox>ログイン情報を保存する</Checkbox>
						</div>
						<div className="text-center mt-6">
							<Button
								onClick={handleSubmit((d) => onLogin(d))}
								type="primary"
								className="w-full"
							>
								ログイン
							</Button>
						</div>
						<div className="mt-6 text-center">
							<span>
								パスワードを忘れた方は
								<Link href="/forgot-password/identify" className="click-here">
									こちら
								</Link>
							</span>
						</div>
						<div className="mt-6">未登録の方はこちら</div>
						<div className="mt-3 grid justify-center grid-cols-2">
							<Link href="/register/member" className="click-here">
								会員登録(一般)
							</Link>
							<Link href="/register/accountant" className="click-here">
								会員登録(税理士)
							</Link>
						</div>
					</div>
				</FormProvider>
			</div>
			<PageFooter />
		</div>
	)
}
