export const products = [
	{
		id: 1,
		selected: true,
		availability: true,
		name:"Нямушка",
		taste:"с фуа-гра",
		bonus:{
            serving:"10 порций",
            toys: "мышка в подарок",
            opinion:""
        },
        weight:"0,5",
        text_available: "Печень утки",
        text_unavailable: "Печалька, с фуа-гра закончился"

	},
	{
		id: 2,
		selected: false,
		availability: true,
		name:"Нямушка",
		taste:"с рыбой",
		bonus:{
            serving:"40 порций",
            toys: "2 мыши в подарок",
            opinion:""
        },
        weight:"2",
        text_available: "Головы щучьи с чесноком да свежайшая сёмгушка.",
        text_unavailable: "Печалька, с рыбой закончился"
	},
	{
		id: 3,
        selected: false,
		availability: false,
		name:"Нямушка",
		taste:"с курой",
		bonus:{
            serving:"100 порций",
            toys: "5 мышей в подарок",
            opinion:"заказчик доволен"
        },
        weight:"5",
        text_available: "С курочкой",
        text_unavailable: "Печалька, с курой закончился"
	},

]