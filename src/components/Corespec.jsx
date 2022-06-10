import React, { useState,  useEffect } from 'react'
import { Card } from 'react-bootstrap'
export default function Corespec({setCorespec}) {

const [Corespecs, setCorespecs] = useState([])
const [baseApi, setBaseApi] = useState("https://api.guildwars2.com/v2/professions")

const [isActive, setIsActive] = useState(false);


useEffect(() => {

	Promise.all([
		fetch(baseApi + "/Guardian"),
		fetch(baseApi + "/Warrior"),
		fetch(baseApi + "/Engineer"),
		fetch(baseApi + "/Ranger"),
		fetch(baseApi + "/Thief"),
		fetch(baseApi + "/Elementalist"),
		fetch(baseApi + "/Mesmer"),
		fetch(baseApi + "/Necromancer"),
		fetch(baseApi + "/Revenant"),
	])

		.then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => {
			return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json()])

		}).then(
			(result) => {
				setCorespecs(result)
			}
		)
});
	const handleColor = () => {
		setIsActive(current => !current);
	}

	return (
		<div  className='d-flex flex-wrap' >
			{Corespecs.map(({ icon_big }) => (
				<Card className='m-1' key={icon_big} onClick={() => handleColor + setCorespec(icon_big)} style={{backgroundColor: isActive ? 'steelblue' : ''}}> 
					<img src={icon_big} alt='' className='w-20'/>
				</Card>
			))}
		</div>
	)
}
