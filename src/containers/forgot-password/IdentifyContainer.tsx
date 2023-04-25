import { PreLayout } from '@/components/PreLayout'
import Button from '@/components/common/button'
import { Breadcrumb, Input } from 'antd'
import Link from 'next/link'
import React from 'react'

export const IdentifyContainer = () => {
	return (
		<PreLayout>
			<div className=" w-[90%] py-6 px-[200px] mt-6 mb-20">
				<Breadcrumb
					items={[
						{
							title: <Link href="/login">ログイン</Link>,
						},
						{
							title: (
								<Link href="/forgot-password/identitfy">
									パスワード再発行の手続き
								</Link>
							),
						},
					]}
				/>

				<div className="flex justify-center text-[24px] font-[700] py-6 ">
					パスワード再発行の手続き
				</div>
				<div className="flex px-[12%]">
					<div className="flex ">
						<div className="whitespace-nowrap mr-2 h-[32px] flex items-center justify-end">
							メールアドレス:
						</div>
					</div>
					<div className="flex-col basis-[80%]">
						<Input />
						<div className="pt-4 text-[#00000073]">
							登録されているメールアドレスに再登録用URLをお送りします。
							3時間以内にアクセスし新しいパスワード設定を完了してください。
							新しいにパスワードにて本人確認が終了するまで、
							再登録は完了しませんので、ご注意下さい。
						</div>
					</div>
				</div>
				<div className="flex justify-center mt-[30px] ">
					<Button className="px-2">
						登録されているメールアドレスへ パスワード再登録用URLを送付する
					</Button>
				</div>
			</div>
		</PreLayout>
	)
}
