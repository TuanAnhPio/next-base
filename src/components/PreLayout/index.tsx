import React from 'react'
import PageHeader from '../PageHeader'
import PageFooter from '../PageFooter'

interface Props extends React.PropsWithChildren {}

export const PreLayout = ({ children }: Props) => {
	return (
		<div className="flex flex-col">
			<PageHeader />
			<div className="flex login-container mt-auto justify-center items-center">
				{children}
			</div>
			<PageFooter />
		</div>
	)
}
