import React, { useState,  useEffect } from 'react'

export default function HoTspec({setHoTspec}) {

const [HoTspecs, setHoTspecs] = useState([])
const [isActive, setIsActive] = useState(false);

const [baseApi, setBaseApi] = useState("https://api.guildwars2.com/v2/specializations")


useEffect(() => {

	Promise.all([
		fetch(baseApi + "/27"),
		fetch(baseApi + "/18"),
		fetch(baseApi + "/43"),
		fetch(baseApi + "/5"),
		fetch(baseApi + "/7"),
		fetch(baseApi + "/48"),
		fetch(baseApi + "/40"),
		fetch(baseApi + "/34"),
		fetch(baseApi + "/52"),
	])

		.then(([res1, res2, res3, res4, res5, res6, res7, res8, res9]) => {
			return Promise.all([res1.json(), res2.json(), res3.json(), res4.json(), res5.json(), res6.json(), res7.json(), res8.json(), res9.json()])

		}).then(
			(result) => {
				setHoTspecs(result)
			}
		)
});
	const handleColor = () => {
		setIsActive(current => !current);
	}
	console.log(isActive)

	return (
		<div  className='d-flex flex-wrap' >
			{HoTspecs.map(({ profession_icon_big }) => (
				<div className='m-1' key={profession_icon_big} onClick={() => handleColor + setHoTspec(profession_icon_big)} > 
					<img src={profession_icon_big} alt=''   style={{backgroundColor: isActive ? 'steelblue' : ''}}/>
				</div>
			))}
		</div>
	)
}
