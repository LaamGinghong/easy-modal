import React, { ChangeEvent, Component, createRef, CSSProperties } from 'react'
import Option, { OptionProps } from './option'
import Selection from './selection'
import './style.less'
import { SelectContainer } from '../container'
import { Portal } from '../portal'
import Options from './options'
import { Input } from '../input'

export interface SelectProps<T> {
  data: OptionProps<T>[]
  allowClear?: boolean
  disabled?: boolean
  value: T | T[]
  multiple?: boolean
  placeholder?: string
  showSearch?: boolean
  searchInputPlaceholder?: string
  onSelect(e: T | T[]): void
  onSearch?: (e: string) => void
  style?: CSSProperties
}

interface SelectState {
  open: boolean
  searchWord: string
}

class Select<T> extends Component<SelectProps<T>, SelectState> {
  state: SelectState = { open: false, searchWord: '' }

  selectContainer = SelectContainer.create('select-container')

  private _selectionRef = createRef<HTMLDivElement>()

  constructor(props) {
    super(props)
    window.addEventListener('click', (): void => {
      this.setState({ open: false, searchWord: '' })
    })
  }

  private _handleOpen = (open: boolean): void => {
    this.setState({ open })
  }

  private _handleSelect = (e: T | T[]): void => {
    const { onSelect } = this.props
    onSelect(e)
    this.setState({ open: false, searchWord: '' })
  }

  private _handleClear = (e?: T | T[]): void => {
    const { onSelect } = this.props
    onSelect(e)
  }

  private _handleChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchWord: event.target.value })
  }

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    const {
      value,
      multiple,
      data,
      style,
      disabled,
      placeholder,
      showSearch,
      searchInputPlaceholder,
      allowClear,
    } = this.props
    const { open, searchWord } = this.state
    return (
      <div className='select'>
        <Selection
          selectionRef={this._selectionRef}
          placeholder={placeholder}
          allowClear={allowClear}
          open={open}
          onOpen={this._handleOpen}
          multiple={multiple}
          disabled={disabled}
          selected={
            multiple
              ? data.filter(item => (value as T[]).includes(item.value))
              : data.find(item => item.value === value)
          }
          onClear={this._handleClear}
          style={style}
        />
        <Portal container={this.selectContainer}>
          {open && (
            <Options style={style} target={this._selectionRef.current}>
              {showSearch && (
                <div className='select-search'>
                  <Input
                    value={searchWord}
                    placeholder={searchInputPlaceholder}
                    onChange={this._handleChangeInput}
                  />
                </div>
              )}
              {data
                .filter(item =>
                  searchWord ? item.name.indexOf(searchWord) > -1 : true,
                )
                .map((item, index) => (
                  <Option
                    key={index}
                    {...item}
                    selected={value}
                    multiple={multiple}
                    onSelect={this._handleSelect}
                  />
                ))}
            </Options>
          )}
        </Portal>
      </div>
    )
  }
}

export default Select