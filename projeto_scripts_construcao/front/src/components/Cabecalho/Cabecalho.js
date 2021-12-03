import React from "react";

const navStyle = {
  minHeight: '10vh',
  color: 'white',
  textAlign: 'center',
  backgroundColor: '#736355',
  paddingTop: '2vh'
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