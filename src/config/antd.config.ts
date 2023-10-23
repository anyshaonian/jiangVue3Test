import { Plugin } from 'vue'
import { Button, message, Spin, Input, Modal } from 'ant-design-vue'

const antdInstall: Plugin = function (app) {
  // 声明为中间件暴露，调用时更优雅
  app.use(Button)
  app.use(Spin)
  app.use(Input)
  app.use(Modal)
  app.config.globalProperties.$message = message
}

export default antdInstall
declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $message: typeof message
  }
}
