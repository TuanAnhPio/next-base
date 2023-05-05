import { PreLayout } from '@/components/PreLayout'
import { Breadcrumb, Checkbox, Divider, Form, Input, Radio, Select } from 'antd'
import Link from 'next/link'
import Button from '@/components/common/button'
import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IFormInput } from './type'

export const MemberRegisterContainer = () => {
	const schema = yup.object().shape({
		companyName: yup
			.string()
			.required('このフィールドに入力してください')
			.max(100, '100文字以内で入力してください'),
		companyCode: yup
			.string()
			.required('このフィールドに入力してください')
			.max(10, '10文字以内で入力してください')
			.test('is-number-0-9', '無効な番号', (value) => {
				if (!value) return true // Return true if the value is empty
				const regex = /^([0-9],?)*[0-9]$/ // Regular expression to match numbers from 0 to 9
				return regex.test(value)
			}),
		companyNameFurigana: yup
			.string()
			.required('このフィールドに入力してください')
			.max(200, '200文字以内で入力してください'),
		representerFirstName: yup
			.string()
			.required('このフィールドに入力してください')
			.max(64, '64文字以内で入力してください'),
		representerLastName: yup
			.string()
			.required('このフィールドに入力してください')
			.max(64, '64文字以内で入力してください'),
		representerFirstNameFurigana: yup
			.string()
			.required('このフィールドに入力してください')
			.max(64, '64文字以内で入力してください'),
		representerLastNameFurigana: yup
			.string()
			.required('このフィールドに入力してください')
			.max(64, '64文字以内で入力してください'),
		postCode: yup
			.string()
			.required('このフィールドに入力してください')
			.matches(/^\d{7}$/, '半角で、7桁入力(ハイフンは入力しない)'),
		province: yup
			.string()
			.required('このフィールドに入力してください')
			.max(6, '6文字以内で入力してください'),
		city: yup
			.string()
			.required('このフィールドに入力してください')
			.max(64, '64文字以内で入力してください'),
		address: yup
			.string()
			.required('このフィールドに入力してください')
			.max(32, '32文字以内で入力してください'),
		//validate follow by japan phone number
		firstPhone: yup
			.string()
			.required('このフィールドに入力してください')
			.test('is-number-0-9', '無効な番号', (value) => {
				if (!value) return true // Return true if the value is empty
				const regex = /^([0-9],?)*[0-9]$/ // Regular expression to match numbers from 0 to 9
				return regex.test(value)
			}),
		middlePhone: yup
			.string()
			.required('このフィールドに入力してください')
			.test('is-number-0-9', '無効な番号', (value) => {
				if (!value) return true // Return true if the value is empty
				const regex = /^([0-9],?)*[0-9]$/ // Regular expression to match numbers from 0 to 9
				return regex.test(value)
			}),
		lastPhone: yup
			.string()
			.required('このフィールドに入力してください')
			.test('is-number-0-9', '無効な番号', (value) => {
				if (!value) return true // Return true if the value is empty
				const regex = /^([0-9],?)*[0-9]$/ // Regular expression to match numbers from 0 to 9
				return regex.test(value)
			}),
		personInChargeFirstName: yup
			.string()
			.max(10, '10文字以内で入力してください'),
		ersonInChargeLastName: yup.string().max(10, '10文字以内で入力してください'),
		personInChargeFirstNameFurigana: yup
			.string()
			.max(20, '20文字以内で入力してください'),
		personInChargeLastNameFurigana: yup
			.string()
			.max(20, '20文字以内で入力してください'),
		hasAdvisoryTax: yup.boolean(),
		isGoodReporting: yup.boolean(),
		isCorrespondCashHandling: yup.boolean(),
		email: yup
			.string()
			.email('無効な電子メール')
			.required('ユーザー名を入力してください')
			.max(
				256,
				'ユーザー名(メールアドレス)の入力形式が正しくありません。 ユーザー名(メールアドレス)は、 半角で、ユーザ名は64文字まで、ドメイン名は255文字まで、 ユーザー名＋ドメインなどを含めた全体は256文字です。'
			)
			.matches(
				/^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/,
				'ユーザー名(メールアドレス)の入力形式が正しくありません。ユーザー名(メールアドレス)は、 半角で、ユーザ名は64文字まで、ドメイン名は255文字まで、 ユーザー名＋ドメインなどを含めた全体は256文字です。'
			),
		reEnterEmail: yup
			.string()
			.email('無効な電子メール')
			.required('ユーザー名を入力してください')
			.max(
				256,
				'ユーザー名(メールアドレス)の入力形式が正しくありません。 ユーザー名(メールアドレス)は、 半角で、ユーザ名は64文字まで、ドメイン名は255文字まで、 ユーザー名＋ドメインなどを含めた全体は256文字です。'
			)
			.matches(
				/^[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,}$/,
				'ユーザー名(メールアドレス)の入力形式が正しくありません。ユーザー名(メールアドレス)は、 半角で、ユーザ名は64文字まで、ドメイン名は255文字まで、 ユーザー名＋ドメインなどを含めた全体は256文字です。'
			)
			.test(
				'custom-validation',
				'再入力したメールアドレスが不一致です。 もう一度入力してください。',
				(reEnterEmail: string) => {
					if (reEnterEmail !== enterEmail) {
						return false
					}
					return true
				}
			),
		password: yup
			.string()
			.required('パスワードを入力してください')
			.min(8, 'パスワードは8文字以上でなければなりません')
			.max(16, 'パスワードは最大 16 文字です')
			.matches(
				/^(?=.*[A-Z])/,
				'パスワードには少なくとも 1 つの大文字が含まれている必要があります'
			),
		reEnterPassword: yup
			.string()
			.required('パスワードを入力してください')
			.min(8, 'パスワードは8文字以上でなければなりません')
			.max(16, 'パスワードは最大 16 文字です')
			.matches(
				/^(?=.*[A-Z])/,
				'パスワードには少なくとも 1 つの大文字が含まれている必要があります'
			)
			.test(
				'custom-validation',
				'再入力したパスワードが不一致です。 もう一度入力してください。',
				(reEnterPassword: string) => {
					if (reEnterPassword !== enterPassword) {
						return false
					}
					return true
				}
			),
	})

	const methods = useForm<IFormInput>({
		resolver: yupResolver(schema),
	})
	const {
		control,
		handleSubmit,
		getValues,
		watch,
		formState: { errors },
	} = methods

	const enterEmail = watch('email')
	const enterPassword = watch('password')
	const [checkBoxValue, setCheckBoxValue] = useState<boolean>(false)

	const onSubmit = useCallback(() => {
		const data = getValues()
		console.log(data)
	}, [getValues])
	console.log(errors)
	return (
		<PreLayout>
			<div className="shadow-[0_4px_4px_rgba(0,0,0,0.15)] w-[90%] h-fit py-6 px-[200px] mt-6 mb-20">
				<Breadcrumb
					items={[
						{
							title: <Link href="/login">ログイン</Link>,
						},
						{
							title: <Link href="/register/member">会員登録(一般)</Link>,
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
								「会員登録(一般)」
							</div>
							<div className="mt-6 pr-[160px]">
								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.companyName?.message}
										</div>
									}
									label="法人名"
									name="companyName"
									required
								>
									<Controller
										control={control}
										name="companyName"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.companyNameFurigana?.message}
										</div>
									}
									label="フリガナ"
									name="companyNameFurigana"
									required
								>
									<Controller
										control={control}
										name="companyNameFurigana"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.companyCode?.message}
										</div>
									}
									label="法人番号"
									name="companyCode"
									required
								>
									<Controller
										control={control}
										name="companyCode"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.representerFirstName?.message}
										</div>
									}
									label="代表者名"
									name="representerName"
									required
								>
									<div className="flex">
										<Controller
											control={control}
											name="representerFirstName"
											render={({ field }) => (
												<Input className="rounded-sm mr-2 " {...field} />
											)}
										/>
										<Controller
											control={control}
											name="representerLastName"
											render={({ field }) => (
												<Input className="rounded-sm " {...field} />
											)}
										/>
									</div>
								</Form.Item>

								<Form.Item
									label="フリガナ"
									name="representerNameFurigana"
									required
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.representerFirstNameFurigana?.message}
										</div>
									}
								>
									<div className="flex">
										<Controller
											control={control}
											name="representerFirstNameFurigana"
											render={({ field }) => (
												<Input className="rounded-sm mr-2 " {...field} />
											)}
										/>
										<Controller
											control={control}
											name="representerLastNameFurigana"
											render={({ field }) => (
												<Input className="rounded-sm " {...field} />
											)}
										/>
									</div>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.postCode?.message}
										</div>
									}
									label="郵便番号"
									name="postCode"
									required
								>
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
															href="https://www.post.japanpost.jp/zipcode/"
															className="text-[#FE0202] underline hover:text-[#FE0202] hover:underline"
															rel="noopener noreferrer"
															target="_blank"
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

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.province?.message}
										</div>
									}
									label="都道府県"
									name="province"
									required
								>
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

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.city?.message}
										</div>
									}
									label="市区町村"
									name="city"
									required
								>
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

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.address?.message}
										</div>
									}
									label="字名・番地"
									name="address"
									required
								>
									<Controller
										control={control}
										name="address"
										render={({ field }) => (
											<Input className="rounded-sm" {...field} />
										)}
									/>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.firstPhone?.message}
										</div>
									}
									label="お電話番号"
									required
								>
									<div className="flex justify-between items-center">
										<Controller
											control={control}
											name="firstPhone"
											render={({ field }) => (
												<Input
													maxLength={3}
													className="rounded-sm w-[25%]"
													{...field}
												/>
											)}
										/>
										<div className="border border-black w-[5%] h-0"></div>
										<Controller
											control={control}
											name="middlePhone"
											render={({ field }) => (
												<Input
													maxLength={4}
													className="rounded-sm w-[25%]"
													{...field}
												/>
											)}
										/>
										<div className="border border-black w-[5%] h-0"></div>
										<Controller
											control={control}
											name="lastPhone"
											render={({ field }) => (
												<Input
													maxLength={4}
													className="rounded-sm w-[25%]"
													{...field}
												/>
											)}
										/>
									</div>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.monthFinance?.message}
										</div>
									}
									label="決算月"
									name="monthFinance"
									required
								>
									<Controller
										control={control}
										name="monthFinance"
										render={({ field }) => (
											<div className="w-full">
												<Select
													style={{ display: 'flex', width: '49%' }}
													// defaultValue={1}
													placeholder="会計月を選択してください"
													onChange={field.onChange}
													options={[
														{ value: '1', label: '1' },
														{ value: '2', label: '2' },
														{ value: '3', label: '3' },
														{ value: '4', label: '4' },
														{ value: '5', label: '5' },
														{ value: '6', label: '6' },
														{ value: '7', label: '7' },
														{ value: '8', label: '8' },
														{ value: '9', label: '9' },
														{ value: '10', label: '10' },
														{ value: '11', label: '11' },
														{ value: '12', label: '12' },
													]}
												/>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="ご担当者名"
									name="personInChargeFirstName"
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.personInChargeFirstName?.message}
										</div>
									}
								>
									<div className="flex">
										<Controller
											control={control}
											name="personInChargeFirstName"
											render={({ field }) => (
												<Input className="rounded-sm mr-2" {...field} />
											)}
										/>
										<Controller
											control={control}
											name="personInChargeLastName"
											render={({ field }) => (
												<Input className="rounded-sm" {...field} />
											)}
										/>
									</div>
								</Form.Item>

								<Form.Item
									label="フリガナ"
									name="personInChargeFirstNameFurigana"
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.personInChargeFirstName?.message}
										</div>
									}
								>
									<div className="flex">
										<Controller
											control={control}
											name="personInChargeFirstNameFurigana"
											render={({ field }) => (
												<Input className="rounded-sm mr-2" {...field} />
											)}
										/>
										<Controller
											control={control}
											name="personInChargeLastNameFurigana"
											render={({ field }) => (
												<Input className="rounded-sm" {...field} />
											)}
										/>
									</div>
								</Form.Item>

								<Form.Item
									label="*顧問税理士の有無"
									name="hasAdvisoryTax"
									required
								>
									<Controller
										control={control}
										name="hasAdvisoryTax"
										render={({ field }) => (
											<div className="w-full">
												<Radio.Group defaultValue={true} {...field}>
													<Radio value={true}>あり</Radio>
													<Radio value={false}>なし</Radio>
												</Radio.Group>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="優良申告法人の該当の有無"
									name="isGoodReporting"
									required
								>
									<Controller
										control={control}
										name="isGoodReporting"
										render={({ field }) => (
											<div className="w-full">
												<Radio.Group defaultValue={true} {...field}>
													<Radio value={true}>はい</Radio>
													<Radio value={false}>いいえ</Radio>
												</Radio.Group>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="現金取扱業種目(現収法人)に該当"
									name="isCorrespondCashHandling"
									required
								>
									<Controller
										control={control}
										name="isCorrespondCashHandling"
										render={({ field }) => (
											<div className="w-full">
												<Radio.Group defaultValue={true} {...field}>
													<Radio value={true}>する</Radio>
													<Radio value={false}>しない</Radio>
												</Radio.Group>
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label="ユーザー名(メールアドレス)"
									name="username"
									required
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.email?.message}
										</div>
									}
									style={{ marginBottom: '4px' }}
								>
									<Controller
										control={control}
										name="email"
										render={({ field }) => (
											<div className="flex-col">
												<Input className="rounded-sm mb-1" {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label=" "
									colon={false}
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.reEnterEmail?.message}
										</div>
									}
								>
									<Controller
										control={control}
										name="reEnterEmail"
										render={({ field }) => (
											<div className="flex-col">
												<Input className="rounded-sm mb-1" {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									help={
										<div className="text-[12px] text-red-600 text-left flex">
											<span>{errors.password?.message}</span>
										</div>
									}
									label="パスワード"
									name="password"
									required
									style={{ marginBottom: '4px' }}
								>
									<Controller
										control={control}
										name="password"
										render={({ field }) => (
											<div className="flex-col justify-between">
												<Input.Password className="rounded-sm " {...field} />
											</div>
										)}
									/>
								</Form.Item>

								<Form.Item
									label=" "
									colon={false}
									help={
										<div className="text-[12px] text-red-600 text-left">
											{errors.reEnterPassword?.message}
										</div>
									}
								>
									<Controller
										control={control}
										name="reEnterPassword"
										render={({ field }) => (
											<div className="flex-col justify-between">
												<Input.Password
													className="rounded-sm mb-1"
													{...field}
												/>
												<div className="pt-2">
													半角英数字で、英大文字1文字以上含む8桁~16桁
												</div>
											</div>
										)}
									/>
								</Form.Item>
							</div>

							<div className="mt-6 text-center">
								<Checkbox
									defaultChecked={checkBoxValue}
									onChange={(e) => setCheckBoxValue(e.target.checked)}
									className="underline"
								>
									会員規約および個人情報の取り扱いについて会員規約、個人情報の取り扱いについて同意する
								</Checkbox>
							</div>
							<div className="text-center mt-6"></div>
							<div className="text-center">
								<Button
									disabled={!checkBoxValue}
									onClick={handleSubmit(onSubmit)}
									type="primary"
								>
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
