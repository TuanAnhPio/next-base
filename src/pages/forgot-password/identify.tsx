import { IdentifyContainer } from '@/containers/forgot-password/IdentifyContainer'
import Head from 'next/head'
import React from 'react'

const Identify = () => {
	return (
		<>
			<Head>
				<title>Identify</title>
				<link rel="ico" href="/public/favicon.ico" />
				<meta name="description" content="Member" />
			</Head>
			<IdentifyContainer />
		</>
	)
}

export default Identify
