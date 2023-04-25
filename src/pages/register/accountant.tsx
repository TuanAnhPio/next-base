import { AccountRegisterContainer } from '@/containers/accountant-register'
import Head from 'next/head'
import React from 'react'

const Member = () => {
	return (
		<>
			<Head>
				<title>Accountant</title>
				<link rel="ico" href="/public/favicon.ico" />
				<meta name="description" content="Member" />
			</Head>
			<AccountRegisterContainer />
		</>
	)
}

export default Member
