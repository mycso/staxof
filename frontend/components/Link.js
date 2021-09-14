import { withRouter } from 'next/router'
import NavLink from 'next/link'
import React, { Children } from 'react'

const ActiveLink = ({ router, children, ...props }) => {
  const child = Children.only(children)

  let className = child.props.className || null
  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim()
  }

  delete props.activeClassName

  return <NavLink {...props}>{React.cloneElement(child, { className })}</NavLink>
}

export default withRouter(ActiveLink)