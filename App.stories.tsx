import App from "./src/App";
import { action } from "@storybook/addon-actions";
import { store } from "./state/store";
import { ReduxStoreProviderDecorator } from "./stories/ReduxStoreProviderDecorator";


export default {
    title: 'App Component',
    component: App,
    decorators:[ReduxStoreProviderDecorator]
  };


export const AppBaseExample = () => {
    return <App/>
};