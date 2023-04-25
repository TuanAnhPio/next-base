import { PreLayout } from '@/components/PreLayout'
import { Breadcrumb, Checkbox, Divider, Form, Input, Radio, Select } from 'antd'
import Link from 'next/link'
import Button from '@/components/common/button'
import React, { useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'

type IFormInput = {
	companyName: string
	companyNameFurigana: string
	representerName: string
	representerNameFurigana: string
	postCode: string
	province: string
	city: string
	address: string
	phone: string
	personInChargeName: string
	personInChargeNameFurigana: string
	email: string
	password: string
}

export const AccountRegisterContainer = () => {
	const methods = useForm<IFormInput>()
	const { control, handleSubmit } = methods

	const onSubmit = useCallback(() => {}, [])
	return (
		<PreLayout>
			<div className="shadow-[0_4px_4px_rgba(0,0,0,0.15)] w-[90%] h-fit py-6 px-[200px] mt-6 mb-20">
				<Breadcrumb
					items={[
						{
							title: <Link href="/login">ログイン</Link>,
						},
						{
							title: <Link href="/register/accountant">会員登録(税理士)</Link>,
						},
					]}
				/>
				<div className="pt-3 pl-12">以下の内容を入力してください。</div>
				<div className="flex justify-center">
					<Form
						name="basic"
						labelCol={{ span: 6 }}
						className="w-[100%]"
						initialValues={{ remember: false }}
						autoComplete="off"
					>
						<div className=" text-base">
							<div className="text-2xl font-bold text-center">
								「会員登録(税理士)」
							</div>
							<div className="mt-6 pr-[160px]">
								<Form.Item label="会計事務所名" name="companyName" required>
									<Controller
										control={control}
										name="companyName"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item label="フリガナ" name="companyNameFurigana" required>
									<Controller
										control={control}
										name="companyNameFurigana"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item label="代表税理士名" name="representerName" required>
									<Controller
										control={control}
										name="representerName"
										render={({ field }) => (
											<div className="flex justify-between">
												<Input
													placeholder="ユーザー名"
													className="rounded-sm w-[49%]"
													{...field}
												/>
												<Input
													placeholder="ユーザー名"
													className="rounded-sm w-[49%]"
													{...field}
												/>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="フリガナ"
									name="representerNameFurigana"
									required
								>
									<Controller
										control={control}
										name="representerNameFurigana"
										render={({ field }) => (
											<div className="flex justify-between">
												<Input className="rounded-sm w-[49%]" {...field} />
												<Input className="rounded-sm w-[49%]" {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item label="郵便番号" name="postCode" required>
									<Controller
										control={control}
										name="postCode"
										render={({ field }) => (
											<div className="flex-col">
												<div className="flex items-center justify-between">
													<Input
														placeholder="ユーザー名"
														className="rounded-sm w-[49%]"
														{...field}
													/>
													<div className="w-[49%] flex justify-start text-[#000000] opacity-50">
														郵便番号がわからない方は{' '}
														<Link
															href="/register/member"
															className="text-[#FE0202] underline hover:text-[#FE0202] hover:underline"
														>
															こちら
														</Link>
													</div>
												</div>
												<div className="flex justify-start text-[#000000] opacity-50">
													ハイフンを入れずに入力してください
												</div>
												<div className="flex justify-start text-[#000000] opacity-50">
													▼郵便番号を入力すると、住所の一部が自動的に表示されます
												</div>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item label="都道府県" name="province" required>
									<Controller
										control={control}
										name="province"
										render={({ field }) => (
											<Input
												placeholder="例）東京都"
												className="rounded-sm"
												{...field}
											/>
										)}
									/>
								</Form.Item>

								<Form.Item label="市区町村" name="city" required>
									<Controller
										control={control}
										name="city"
										render={({ field }) => (
											<Input
												placeholder="例）＊＊＊市＊＊＊町"
												className="rounded-sm"
												{...field}
											/>
										)}
									/>
								</Form.Item>

								<Form.Item label="字名・番地" name="address" required>
									<Controller
										control={control}
										name="address"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item label="お電話番号" name="phone" required>
									<Controller
										control={control}
										name="phone"
										render={({ field }) => (
											<div className="flex justify-between items-center">
												<Input className="rounded-sm w-[25%]" {...field} />
												<div className="border border-black w-[5%] h-0"></div>
												<Input className="rounded-sm w-[25%]" {...field} />
												<div className="border border-black w-[5%] h-0"></div>
												<Input className="rounded-sm w-[25%]" {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<div className=" pl-12 pt-10 pb-10">
									代表者と異なる場合は入力して下さい。
								</div>
								<Form.Item
									label="ご担当者名"
									name="personInChargeName"
									required
								>
									<Controller
										control={control}
										name="personInChargeName"
										render={({ field }) => (
											<div className="flex justify-between">
												<Input className="rounded-sm w-[49%]" {...field} />
												<Input className="rounded-sm w-[49%]" {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="フリガナ"
									name="personInChargeNameFurigana"
									required
								>
									<Controller
										control={control}
										name="personInChargeNameFurigana"
										render={({ field }) => (
											<div className="flex justify-between">
												<Input className="rounded-sm w-[49%]" />
												<Input className="rounded-sm w-[49%]" />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="ユーザー名(メールアドレス)"
									name="username"
									required
								>
									<Controller
										control={control}
										name="personInChargeNameFurigana"
										render={({ field }) => (
											<div className="flex-col">
												<Input className="rounded-sm mb-1" />
												<Input className="rounded-sm mt-1" />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item label="パスワード" name="password" required>
									<Controller
										control={control}
										name="personInChargeNameFurigana"
										render={({ field }) => (
											<div className="flex-col justify-between">
												<Input className="rounded-sm mb-1" />
												<Input className="rounded-sm mt-1" />
												<div className="pt-2">
													半角英数字で、英大文字1文字以上含む8桁~16桁
												</div>
											</div>
										)}
									/>
								</Form.Item>
							</div>

							<div className="mt-6 text-center">
								<Checkbox className="underline">
									会員規約および個人情報の取り扱いについて
									会員規約、個人情報の取り扱いについて同意する
								</Checkbox>
							</div>
							<div className="text-center mt-6"></div>
							<div className="text-center">
								<Button onClick={handleSubmit(onSubmit)} type="primary">
									この内容で会員登録する
								</Button>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</PreLayout>
	)
}
