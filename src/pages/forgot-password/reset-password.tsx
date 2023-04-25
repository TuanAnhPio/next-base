import { ResetPasswordContainer } from '@/containers/forgot-password/ResetPasswordContainer'
import Head from 'next/head'
import React from 'react'

const ResetPassword = () => {
	return (
		<>
			<Head>
				<title>ResetPassword</title>
				<link rel="ico" href="/public/favicon.ico" />
				<meta name="description" content="Member" />
			</Head>
			<ResetPasswordContainer />
		</>
	)
}

export default ResetPassword
