import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { ModalProps, Modal } from './components/modal'
import { ButtonProps, Button } from './components/button'
import { FlexItemProps, FlexProps, FlexItem, Flex } from './components/flex'
import { List, ListItem, ListItemProps, ListProps } from './components/list'
import { message, MessageProps } from './components/message'
import {
    notification,
    NotificationCreateConfig,
} from './components/notification'
import { Input } from './components/input'
import { SwitchProps, Switch } from './components/switch'
import { TabsProps, Tabs } from './components/tabs'
import { BreadcrumbsProps, Breadcrumbs } from './components/breadcrumbs'
import { Popover, PopoverProps, PopoverClose } from './components/popover'
import { Select, SelectProps } from './components/select'
import { Pagination, PaginationProps } from './components/pagination'
import { InputNumber, InputNumberProps } from './components/input-number'
import { DividerProps, Divider } from './components/divider'
import { DrawerProps, Drawer } from './components/drawer'
import {
    CheckboxGroup,
    Checkbox,
    CheckboxProps,
    CheckboxGroupProps,
} from './components/checkbox'
import {
    DatePickerProps,
    DatePicker,
    MonthPickerProps,
    MonthPicker,
    TimePickerProps,
    TimePicker,
    YearPickerProps,
    YearPicker,
} from './components/date-picker'
import {
    RadioGroupProps,
    RadioGroup,
    RadioProps,
    Radio,
} from './components/radio'

dayjs.locale('zh-cn')

export {
    Modal,
    ModalProps,
    Button,
    ButtonProps,
    FlexItem,
    FlexProps,
    FlexItemProps,
    Flex,
    ListItemProps,
    ListProps,
    ListItem,
    List,
    message,
    MessageProps,
    notification,
    NotificationCreateConfig,
    Input,
    SwitchProps,
    Switch,
    TabsProps,
    Tabs,
    BreadcrumbsProps,
    Breadcrumbs,
    Popover,
    PopoverProps,
    PopoverClose,
    SelectProps,
    Select,
    InputNumber,
    InputNumberProps,
    PaginationProps,
    Pagination,
    DividerProps,
    Divider,
    DrawerProps,
    Drawer,
    CheckboxProps,
    Checkbox,
    CheckboxGroup,
    CheckboxGroupProps,
    DatePicker,
    DatePickerProps,
    MonthPicker,
    MonthPickerProps,
    YearPickerProps,
    YearPicker,
    TimePickerProps,
    TimePicker,
    RadioProps,
    RadioGroup,
    RadioGroupProps,
    Radio,
}
