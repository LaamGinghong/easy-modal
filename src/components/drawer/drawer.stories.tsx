import React, { ReactNode, useCallback, useState } from 'react'
import { Drawer } from './index'
import { Button } from '../button'
import { Radio } from '../radio'
import { DrawerPlacement } from '../config'

const { Group } = Radio

export default { title: 'Drawer' }

export const common = (): ReactNode => {
  const [visible, setVisible] = useState(false)

  const handleToggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <>
      <Button onClick={handleToggle}>toggle</Button>
      <Drawer visible={visible} title='title' onClose={handleToggle}>
        <div>content</div>
      </Drawer>
    </>
  )
}

export const placement = (): ReactNode => {
  const [placement, setPlacement] = useState<DrawerPlacement>('right')
  const handleChange = useCallback((value: DrawerPlacement): void => {
    setPlacement(value)
  }, [])

  const handleCreateDrawer = useCallback((): void => {
    Drawer.create({
      title: '标题',
      content: <div>内容</div>,
      placement,
    })
  }, [placement])

  return (
    <>
      <Group
        value={placement}
        onChange={handleChange}
        options={[
          { value: 'right', label: '右' },
          { value: 'left', label: '左' },
          { value: 'top', label: '顶' },
          { value: 'bottom', label: '底' },
        ]}
      />
      <Button onClick={handleCreateDrawer}>create drawer</Button>
    </>
  )
}
