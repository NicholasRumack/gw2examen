import React, { useState,  useEffect } from 'react'

export default function PoFspec({setPoFspec}) {

const [PoFspec, setPoFspecs] = useState([])

const [baseApi, setBaseApi] = useState("https://api.guildwars2.com/v2/specializations")


useEffect(() => {

	Promise.all([
		fetch(baseApi + "/62"),
		fetch(baseApi + "/61"),
		fetch(baseApi + "/57"),
		fetch(baseApi + "/55"),
		fetch(baseApi + "/58"),
		fetch(baseApi + "/56"),
		fetch(baseApi + "/59"),
		fetch(baseApi + "/60"),
		fetch(baseApi + "/63"),
	])

		.then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => {
			return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json()])

		}).then(
			(result) => {
				setPoFspecs(result)
			}
		)
});


	return (
		<div className='d-flex flex-wrap' >
			{PoFspec.map(({ profession_icon_big }) => (
				<div key={profession_icon_big} onClick={() => setPoFspec(profession_icon_big)} > 
					<img src={profession_icon_big} alt='' style={{width: 60}}/>
				</div>
			))}
		</div>
	)
}
