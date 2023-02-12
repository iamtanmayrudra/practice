import React from 'react'
import { Button } from 'react-bootstrap';

import { useDrag } from 'react-dnd'
import { ItemTypes } from './Constants'

function Alert() {
  return (
    <div>
      <Button variant="outline-primary">kjhg</Button>
      {[
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark',
      ].map((warning) => (
        <Alert key={warning} warning={warning}>
          This is a {warning} alert—check it out!
        </Alert>
      ))}
    </div>
    <>
    {/* // Let's make <Card text='Write the docs' /> draggable! */}

export default function Card({ isDragging, text }) {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ opacity }}>
      {text}
    </div>
  )
}
    </>
  )
}

export default Alert
