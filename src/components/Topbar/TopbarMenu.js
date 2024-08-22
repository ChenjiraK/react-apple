
function TopbarMenu(){
    const barMenu = [
        {
            id: 1,
            label: 'Mac',
            route: ''
        },
        {
            id: 2,
            label: 'iPad',
            route: ''
        },
        {
            id: 3,
            label: 'iPhone',
            route: ''
        },
        {
            id: 4,
            label: 'Watch',
            route: ''
        },
        {
            id: 5,
            label: 'TV & Home',
            route: ''
        },
        {
            id: 6,
            label: 'Accessories',
            route: ''
        },
        {
            id: 7,
            label: 'Service',
            route: ''
        },
        {
            id: 8,
            label: 'Offers',
            route: ''
        },
    ]
    const otherMenu = [
        {
            id: 9,
            label: 'Stores',
            route: ''
        },
        {
            id: 10,
            label: 'Business',
            route: ''
        },
    ]
    return(
       <div className="flex justify-between">
           {barMenu.map((bar) => (
                <div className="cursor-pointer" key={bar.id}>
                    <p>{bar.label}</p>
                </div>
            ))}
            <div className="h-7 border-l"></div>
            {otherMenu.map((other) => (
                <div className="cursor-pointer" key={other.id}>
                    <p>{other.label}</p>
                </div>
            ))}
       </div>
    )
}
export default TopbarMenu