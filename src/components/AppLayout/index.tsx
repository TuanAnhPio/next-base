import PageHeader from '@/components/PageHeader'
import PageFooter from '@/components/PageFooter'
import React, { useEffect, useState } from 'react'
import { Breadcrumb, Layout, Menu, MenuProps, theme } from 'antd'
import useProfile from '@/hooks/useProfile'
import MainMenu from '@/components/AppLayout/menu'

const { Sider } = Layout
type MenuItem = Required<MenuProps>['items'][number]

interface Props extends React.PropsWithChildren {
	withMenu?: boolean
}

function getItem(
	label: React.ReactNode,
	key?: React.Key | null,
	icon?: React.ReactNode,
	children?: MenuItem[],
	theme?: 'light' | 'dark'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		theme,
	} as MenuItem
}

export default function AppLayout({ children }: Props) {
	const [collapsed, setCollapsed] = useState(false)

	const profile = useProfile()
	return (
		<div className="flex flex-col">
			<PageHeader />
			<div className="flex h-full">
				<Sider
					width={300}
					className="h-full custom-slider"
					trigger={null}
					collapsible
					collapsed={collapsed}
					collapsedWidth={150}
				>
					<div className="text-secondary font-bold text-2xl flex justify-between p-2 pl-7">
						{!collapsed && profile.data?.roles}
						<img
							onClick={() => setCollapsed((prev) => !prev)}
							src="/images/icon/svg/blue-arrow.svg"
							width="20"
							className="cursor-pointer"
							alt=""
						/>
					</div>
					<div className="text-secondary font-bold text-base p-2 mt-2 pl-7">
						MENU
					</div>
					<Menu
						className="!border-none main-menu h-[100%]"
						mode="inline"
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						style={{ height: '100%' }}
						items={MainMenu.map((e) =>
							getItem(
								<div className="text-secondary">{e.name}</div>,
								e.key,
								<div className="px-[10px]">{e.icon}</div>
							)
						)}
					/>
				</Sider>
				{children}
			</div>
			<PageFooter />
			<style jsx global>
				{`
					.custom-slider {
						box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
					}

					.main-menu li {
					}
				`}
			</style>
		</div>
	)
}
