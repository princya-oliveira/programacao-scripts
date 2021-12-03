import React from "react";
import { useHistory } from 'react-router-dom';

const menuStyle = {
  minHeight: '10vh',
  backgroundColor: '#9BBF65',
  paddingLeft: '1vw',
  paddingTop: '2vh'
}

const btnStyle = {
  margin: '0.5%',
  minWidth: '12vw',
  marginLeft: '3vw',
  fontcolor: '#D9CDBF'
  
}
export default function Menu() {

  const history = useHistory()

  return (
    <>
      <div
        style={menuStyle}>
        <button
          type="button"
          style={btnStyle}
          className="btn btn-dark"
          onClick={() => history.push('/obra')}> Obra </button>
        <button
          type="button"
          style={btnStyle}
          className="btn btn-dark"
          onClick={() => history.push('/engenheiro')}> Engenheiro </button>
      </div>
    </>
  )
}