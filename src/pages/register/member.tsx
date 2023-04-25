import { MemberRegisterContainer } from '@/containers/member-register/MemberRegisterContainer'
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
