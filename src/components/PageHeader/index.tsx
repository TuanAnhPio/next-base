import { Button } from "antd";

export default function PageHeader() {
	return (
		<div className="bg-primary text-base page-header flex justify-between">
			<div className="text-white font-bold text-2xl">税務診断サービス</div>
			{/* <div className="grid grid-cols-3 gap-4">
        <Button className="bg-white text-sm text-primary px-8 border-0 rounded ">
          ログイン
        </Button>
        <Button className="bg-wineRed text-sm text-white px-8 border-0 rounded">
          会員登録(一般)
        </Button>
        <Button className="bg-orangee text-sm text-white px-8 border-0 rounded">
          会員登録(税理士)
        </Button>
      </div> */}
			<style jsx>
				{`
					.page-header {
						padding: 8px 24px;
					}
				`}
			</style>
		</div>
	);
}
