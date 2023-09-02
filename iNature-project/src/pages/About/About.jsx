import React from 'react'

export default function About({active, setActive}) {
  React.useEffect(() => {
    setActive("About");
  },[])
  return (
    <div>
      About
    </div>
  )
}
