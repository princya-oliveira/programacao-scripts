import React from "react";

const navStyle = {
  minHeight: '15vh',
  color: 'white',
  textAlign: 'center',
  backgroundColor: '#736355',
  paddingTop: '5vh'
}

export default function Cabecalho() {

  return (
    <>
      <div
        style={navStyle}>
        <h1> Projeto Scripts | Construção </h1>
      </div>
    </>
  )
}