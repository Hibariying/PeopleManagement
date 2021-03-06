## 项目介绍：

​		本项目的目的在于让公司管理员工由人工管理转换为自动化办公的形式，极大的节省和利用人力资源。本项目基于 **Vue.js** 框架，采用 **vue-element-admin** 后台前端解决方案，利用 **Vuex** 管理组件状态，解决不同组件数据共享问题；采用 **element-ui** 组件，完成页面的功能布局；通过 **vue-cli** 配置 **webpack** 的反向代理，解决了前端项目访问后端接口的跨域问题；通过给用户分配不同的角色来对页面权限进行控制，通过 **vue-router** 设计静态路由和动态路由，实现不同页面的切换效果。
## 个人职责：

- 使用 **element** 表单校验和自定义校验规则，实现了登录页面的表单验证功能
- 配置 **webpack** 的反向代理，解决前后端接口跨域问题
- 设计不同的角色，将权限点分配给不同的角色，给用户分配不同的角色，实现了用户与权限点的分离
- 通过 **Vuex** 集中式管理所有组件的状态，解决了不同组件数据共享问题，提高了开发效率
- 设计动态路由来控制访问权限，便于管理和维护业务

## 技术栈：

Vue2.0，Vuex，element-ui组件库，webpack，vue-router

## 项目难点：

反向代理、 token 的权限拦截、结构树形化