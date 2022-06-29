import React, { useState,  useEffect } from 'react'

export default function EoDspec({setEoDspec}) {

const [EoDspec, setEoDspecs] = useState([])

const [baseApi, setBaseApi] = useState("https://api.guildwars2.com/v2/specializations")


useEffect(() => {

	Promise.all([
		fetch(baseApi + "/65"),
		fetch(baseApi + "/68"),
		fetch(baseApi + "/70"),
		fetch(baseApi + "/72"),
		fetch(baseApi + "/71"),
		fetch(baseApi + "/67"),
		fetch(baseApi + "/66"),
		fetch(baseApi + "/64"),
		fetch(baseApi + "/69"),
	])

		.then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => {
			return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json()])

		}).then(
			(result) => {
				setEoDspecs(result)
			}
		)
});


	return (
		<div className='d-flex flex-wrap' >
			{EoDspec.map(({ profession_icon_big }) => (
				<div key={profession_icon_big} onClick={() => setEoDspec(profession_icon_big)} > 
					<img src={profession_icon_big} alt='' style={{width: 60}} />
				</div>
			))}
		</div>
	)
}