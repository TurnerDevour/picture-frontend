// 引入一些常用的 Ant Design 组件和样式
import 'ant-design-vue/dist/reset.css'
import type { App, Plugin } from 'vue'
import {
  Button,
  Layout,
  Menu,
  Row,
  Col,
  Checkbox,
  Form,
  Input,
  Avatar,
  Space,
  Dropdown,
  Table,
  Tag,
  Image,
  Upload,
  Select,
  AutoComplete,
  Flex,
  List,
  Card,
  Tabs,
  Descriptions,
  InputNumber,
  Pagination,
  Tooltip,
  Progress,
  Typography,
  DatePicker,
  QRCode,
  Modal,
} from 'ant-design-vue'

const Antd: Plugin = {
  install(app: App) {
    app.use(Button)
    app.use(Layout)
    app.use(Menu)
    app.use(Row)
    app.use(Col)
    app.use(Form)
    app.use(Input)
    app.use(Avatar)
    app.use(Space)
    app.use(Checkbox)
    app.use(Dropdown)
    app.use(Table)
    app.use(Tag)
    app.use(Image)
    app.use(Upload)
    app.use(Select)
    app.use(AutoComplete)
    app.use(Flex)
    app.use(List)
    app.use(Card)
    app.use(Tabs)
    app.use(Descriptions)
    app.use(InputNumber)
    app.use(Pagination)
    app.use(Tooltip)
    app.use(Progress)
    app.use(Typography)
    app.use(DatePicker)
    app.use(QRCode)
    app.use(Modal)
  },
}

export default Antd
