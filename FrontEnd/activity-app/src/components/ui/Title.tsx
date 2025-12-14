import React from 'react'

interface TitleProps {
    title: string;
    children?: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({title, children}: TitleProps) => {
  return (
    <div className='d-flex justify-content-between align-items-end mt-2 pb-3 border-bottom border-1'>
            <h1 className='m-0 p-0'>{title}</h1>
            {children}
        </div>
  )
}

export default Title