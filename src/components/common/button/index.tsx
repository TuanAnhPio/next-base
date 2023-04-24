import ButtonAtd, { ButtonProps } from 'antd/lib/button'
import cls from 'classnames'
import React from 'react'

type Props = Omit<ButtonProps, 'type' | 'size'> & {
	className?: string
	type?: 'primary' | 'wineRed'
	rounded?: 'semiSmall' | 'small' | 'middle' | 'large'
}
const Button = ({
	children,
	className,
	type = 'primary',
	...props
}: React.PropsWithChildren<Props>) => {
	return (
		<ButtonAtd
			className={cls(
				{
					'bg-primary text-white text-base text-bold': type === 'primary',
					'bg-wineRed text-primary': type === 'wineRed',
				},
				'px-8 border-0 rounded-sm',
				className
			)}
			{...props}
		>
			{children}
		</ButtonAtd>
	)
}

export default Button
