import { Checkbox, Form, Input } from 'antd'
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
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type IFormInput = {
	username: string
	password: string
}

type LoginResponseData = {
	access_token: string
}
export default function Login() {
	const schema = yup.object().shape({
		username: yup
			.string()
			.email('無効な電子メール')
			.required('ユーザー名を入力してください'),
		password: yup.string().required('パスワードを入力してください'),
		// .min(8, 'パスワードは8文字以上でなければなりません')
		// .max(16, 'パスワードは最大 16 文字です')
		// .matches(
		// 	/^(?=.*[A-Z])/,
		// 	'パスワードには少なくとも 1 つの大文字が含まれている必要があります'
		// ),
	})
	const methods = useForm<IFormInput>({
		resolver: yupResolver(schema),
	})
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = methods
	const router = useRouter()

	const onLogin = async (data: IFormInput) => {
		console.log(data)
		// const res = await axiosInstance.post<LoginResponseData>('auth/login', data)
		// if (res.data.access_token) {
		// 	Cookies.set('access_token', res.data.access_token)
		// 	await router.push('/')
		// }
	}

	console.log(errors)

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
							<Form.Item
								help={
									<div className="text-[12px] text-red-600 text-left">
										{errors.username?.message}
									</div>
								}
							>
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
							</Form.Item>

							<Form.Item
								help={
									<div className="text-[12px] text-red-600 text-left">
										{errors.password?.message}
									</div>
								}
							>
								<Controller
									control={control}
									render={({ field }) => (
										<Input.Password
											className="rounded-sm"
											size="large"
											placeholder="パスワード"
											prefix={<UserOutlined />}
											{...field}
										/>
									)}
									name="password"
								/>
							</Form.Item>
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
