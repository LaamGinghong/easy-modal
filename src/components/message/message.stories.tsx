import React, { ReactNode, useCallback } from 'react'
import { Button } from '../button'
import { message } from './index'

export default { title: 'Message' }

export const common = (): ReactNode => {
  const handleClick = useCallback((): void => {
    message.create({ type: 'info', content: '内容' })
  }, [])

  return <Button onClick={handleClick}>send message</Button>
}

export const speedCreate = (): ReactNode => {
  const handleInfo = useCallback((): void => {
    message.info({ content: 'Info' })
  }, [])
  const handleSuccess = useCallback((): void => {
    message.success({ content: 'Success' })
  }, [])
  const handleWarning = useCallback((): void => {
    message.warning({ content: 'Warning' })
  }, [])
  const handleError = useCallback((): void => {
    message.error({ content: 'Error' })
  }, [])

  return (
    <>
      <Button style={{ marginRight: '10px' }} onClick={handleSuccess}>
        success
      </Button>
      <Button
        style={{ marginRight: '10px' }}
        type='primary'
        onClick={handleInfo}>
        info
      </Button>
      <Button
        style={{ marginRight: '10px' }}
        type='danger'
        onClick={handleError}>
        danger
      </Button>
      <Button type='link' onClick={handleWarning}>
        warning
      </Button>
    </>
  )
}

export const maxCount = (): ReactNode => {
  const handleClick = useCallback((): void => {
    message.create({ type: 'info', content: '内容', maxCount: 10 })
  }, [])

  return <Button onClick={handleClick}>Max Count 10</Button>
}

export const top = (): ReactNode => {
  const handleClick = useCallback((): void => {
    message.create({ type: 'info', content: '内容', top: 5 })
  }, [])

  return <Button onClick={handleClick}>Top 5px</Button>
}

export const duration = (): ReactNode => {
  const handleClick = useCallback((): void => {
    message.create({ type: 'info', content: '内容', duration: 10000 })
  }, [])

  return <Button onClick={handleClick}>Duration 10s</Button>
}
