import React from 'react'
import { classNames } from "../../utils/util"

export default function RoundedImage(props: any) {
  const borderRadius = props.borderRadius || '5px'

  return (
    <div className={classNames(props?.shadow, props?.rounded, "shadow")}>
      <div style={{ borderRadius: borderRadius, overflow: 'hidden' }}>
        {props.children}
      </div>
    </div>
  )
}