import React, { useState } from 'react'
import { Container, Card, CloseButton, Tab, Tabs } from 'react-bootstrap'
import Corespec from '../components/Corespec'
import EoDspec from '../components/EoDspec'
import HoTspec from '../components/HoTspec'
import PoFspec from '../components/PoFspec'


export default function Composition() {

const [placable, setplacable] = useState([])

const [square1, setsquare1] = useState([])
const [square2, setsquare2] = useState([])
const [square3, setsquare3] = useState([])
const [square4, setsquare4] = useState([])
const [square5, setsquare5] = useState([])

const [square6, setsquare6] = useState([])
const [square7, setsquare7] = useState([])
const [square8, setsquare8] = useState([])
const [square9, setsquare9] = useState([])
const [square10, setsquare10] = useState([])

/* 		Squad one */
	function clickedsetsquare1() {
		setsquare1(placable)
	}
	function clickedsetsquare2() {
		setsquare2(placable)
	}
	function clickedsetsquare3() {
		setsquare3(placable)
	}
	function clickedsetsquare4() {
		setsquare4(placable)
	}
	function clickedsetsquare5() {
		setsquare5(placable)
	}
/* 		Squad two */
	function clickedsetsquare6() {
		setsquare6(placable)
	}
	function clickedsetsquare7() {
		setsquare7(placable)
	}
	function clickedsetsquare8() {
		setsquare8(placable)
	}
	function clickedsetsquare9() {
		setsquare9(placable)
	}
	function clickedsetsquare10() {
		setsquare10(placable)
	}

/* 		Squad one */
	function clearSquare1() {
		setsquare1("")
	}
	function clearSquare2() {
		setsquare2("")
	}
	function clearSquare3() {
		setsquare3("")
	}
	function clearSquare4() {
		setsquare4("")
	}
	function clearSquare5() {
		setsquare5("")
	}
/* 		Squad two */
	function clearSquare6() {
		setsquare6("")
	}
	function clearSquare7() {
		setsquare7("")
	}
	function clearSquare8() {
		setsquare8("")
	}
	function clearSquare9() {
		setsquare9("")
	}
	function clearSquare10() {
		setsquare10("")
	}

  return (
	  <Container>
		  <Tabs defaultActiveKey="core" className="mb-3">
			  <Tab eventKey="core" title="Core">
				  <Corespec setCorespec={setplacable} />
			  </Tab>
			  <Tab eventKey="hot" title="Hot">
				  <HoTspec setHoTspec={setplacable} />
			  </Tab>
			  <Tab eventKey="pof" title="PoF">
				  <PoFspec setPoFspec={setplacable} />
			  </Tab>
			  <Tab eventKey="eod" title="EoD">
				  <EoDspec setEoDspec={setplacable} />
			  </Tab>
		  </Tabs>

		  <div className='d-inline-flex m-2'>
		  <h4 className='align-self-center'>Squad One</h4>
			  
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare1} />
				  <div onClick={clickedsetsquare1} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square1} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare2} />
				  <div onClick={clickedsetsquare2} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square2} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare3} />
				  <div onClick={clickedsetsquare3} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square3} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare4} />
				  <div onClick={clickedsetsquare4} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square4} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare5} />
				  <div onClick={clickedsetsquare5} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square5} alt='' />
				  </div>
			  </Card>
		  </div>
		  <div className='d-flex flex-wrap m-2'>
		  <h4 className='align-self-center'>Squad Two</h4>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare6} />
				  <div onClick={clickedsetsquare6} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square6} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare7} />
				  <div onClick={clickedsetsquare7} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square7} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare8} />
				  <div onClick={clickedsetsquare8} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square8} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare9} />
				  <div onClick={clickedsetsquare9} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square9} alt='' />
				  </div>
			  </Card>
			  <Card className='m-2'>
				  <CloseButton onClick={clearSquare10} />
				  <div onClick={clickedsetsquare10} className='p-2' style={{ width: '6rem', height: '5rem' }}>
					  <img src={square10} alt='' />
				  </div>
			  </Card>
		  </div>
	  </Container>
  )
}
