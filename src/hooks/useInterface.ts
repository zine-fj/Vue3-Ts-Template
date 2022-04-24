
// 公用头部内容
export interface HeaderProps {
  opacity?: number;
  name?: string | unknown;
  nameEn?: string;
  leftShow: boolean;
  contShow?: boolean;
  rightShow?: boolean;
}

// 列表
export interface ListProps {
  value: {
    id?: string;
    intro?: string;
  }[]
}

// vuex中props
export interface VuexProps {
  actions?: () => void;
  mutation?: () => void;
  namespaced?: boolean;
  state?: () => void;
}
// vuex中state
export interface StatesProps {
  isLogged: boolean; // 是否第一次登录过了
  token: string;
}
// vuex中modulesProps
export interface modulesProps {
  Login: VuexProps;
}
