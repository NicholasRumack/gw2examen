import React from 'react'

export default function Header() {
  return (
	  <div className='d-flex w-100'>
		  <img src={require("../imgs/druid_conceptart.jpg")} alt="" style={{ width: 200 }} />
		  <div className='d-flex flex-column align-self-center'>
			  <h1 style={{ fontFamily: "GWTwoFont" }}>Guild Wars 2</h1>
			  <h2 style={{ fontFamily: "GWTwoFont" }}>Composition Builder</h2>
		  </div>
		  <img src={require("../imgs/Revenant_01_concept_art.jpg")} alt="" style={{ width: 200 }} />
	  </div>
  )
}
