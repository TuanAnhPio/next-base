import { UserRole } from "@/services/user";
import { HomeTwoTone } from '@ant-design/icons';

const MainMenu = [
  {
    name: "ダッシュボード",
    key: "dashboard",
    icon: HomeTwoTone,
    role: [UserRole.USER, UserRole.TAX_ACCOUNTANT, UserRole.ADMIN],
  },
  {
    name: "アカウント情報",
    key: "account_information",
    role: [UserRole.USER, UserRole.TAX_ACCOUNTANT],
  },
  {
    name: "登録",
    key: "register",
    role: [UserRole.TAX_ACCOUNTANT, UserRole.ADMIN],
  },
  {
    name: "監理者情報確認",
    key: "information_confirmation",
    role: [UserRole.ADMIN],
  },
  {
    name: "申告書（状況一覧）",
    key: "declaration_form",
    role: [UserRole.USER, UserRole.TAX_ACCOUNTANT],
  },
  {
    name: "分析結果",
    key: "analysis_results",
    role: [UserRole.USER],
  },
  {
    name: "会員情報一覧",
    key: "member_information_list",
    role: [UserRole.TAX_ACCOUNTANT, UserRole.ADMIN],
  },
  {
    name: "面談（予約）",
    key: "reservation",
    role: [UserRole.USER, UserRole.ADMIN],
  },
  {
    name: "マニュアル",
    key: "manual",
    role: [UserRole.USER, UserRole.TAX_ACCOUNTANT, UserRole.ADMIN],
  },
];

export default MainMenu;
