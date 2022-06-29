import React from 'react'

export default function Header() {
  return (
	  <div className='d-flex w-100 justify-content-center'>
		  <img src={require("../imgs/druid_conceptart.jpg")} alt="" style={{ width: 200, marginRight: 100 }}/>
		  <div className='d-flex flex-column align-self-center m-4'>
			  <h1 style={{ fontFamily: "GWTwoFont" }}>Guild Wars 2</h1>
			  <h2 style={{ fontFamily: "GWTwoFont" }}>Composition Builder</h2>
		  </div>
		  <img src={require("../imgs/Revenant_01_concept_art.jpg")} alt="" style={{ width: 200, marginLeft: 100 }} />
	  </div>
  )
}
