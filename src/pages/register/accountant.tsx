import { AccountRegisterContainer } from '@/containers/register/accountant'
import Head from 'next/head'
import React from 'react'

const Accountant = () => {
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

export default Accountant
