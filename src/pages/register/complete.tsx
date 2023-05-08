import { PreLayout } from '@/components/PreLayout'
import Button from '@/components/common/button'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const RegistrationComplete = () => {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Accountant</title>
				<link rel="ico" href="/public/favicon.ico" />
				<meta name="description" content="Member" />
			</Head>
			<PreLayout>
				<div className="h-[200px] w-[400px] flex flex-col justify-center items-center mt-20 shadow-[0_4px_4px_rgba(0,0,0,0.15)]">
					<div className="text-[24px] mb-6">登録が完了しました。</div>
					<Button
						onClick={() => router.push('/login')}
						style={{ width: '215px' }}
					>
						TOPへ
					</Button>
				</div>
			</PreLayout>
		</>
	)
}

export default RegistrationComplete
