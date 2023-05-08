import { MemberRegisterContainer } from '@/containers/register/member'
import Head from 'next/head'
import React from 'react'

const Member = () => {
	return (
		<>
			<Head>
				<title>Member</title>
				<link rel="ico" href="/public/favicon.ico" />
				<meta name="description" content="Member" />
			</Head>
			<MemberRegisterContainer />
		</>
	)
}

export default Member
