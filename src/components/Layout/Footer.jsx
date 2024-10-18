function Footer(){
    const menus = [
        {
            mainMenu: 'Shop',
            subMenu: [
                {
                    name: 'Mac',
                    routeLink: ''
                },
                {
                    name: 'Ipad',
                    routeLink: ''
                },
                {
                    name: 'Iphone',
                    routeLink: ''
                },
                {
                    name: 'Watch',
                    routeLink: ''
                },
                {
                    name: 'Music',
                    routeLink: ''
                },
                {
                    name: 'TV & Home',
                    routeLink: ''
                },
                {
                    name: 'Accessories',
                    routeLink: ''
                },
            ]
        },
        {
            mainMenu: 'Services',
            subMenu: [
                {
                    name: 'Customer Support',
                    routeLink: ''
                },
                {
                    name: 'Business',
                    routeLink: ''
                },
                {
                    name: 'Financing',
                    routeLink: ''
                },
                {
                    name: 'Trade-in',
                    routeLink: ''
                },
                {
                    name: 'In-Store Classes',
                    routeLink: ''
                },
                {
                    name: 'AppleCare+',
                    routeLink: ''
                },
            ]
        },
        {
            mainMenu: 'About',
            subMenu: [
                {
                    name: 'Contact us',
                    routeLink: ''
                },
                {
                    name: 'Find a store',
                    routeLink: ''
                }
            ]
        },
        {
            mainMenu: 'Policies',
            subMenu: [
                {
                    name: 'Return policy',
                    routeLink: ''
                },
                {
                    name: 'Privacy',
                    routeLink: ''
                },
                {
                    name: 'My Account',
                    routeLink: ''
                }
            ]
        },
    ]
    return(
        <footer className='flex justify-around py-4'>
            {menus.map((menu, index) => (
                <div key={`menu_${index}`}>
                    {/* Main Menu Item */}
                    <div className="text-lg font-semibold">{menu.mainMenu}</div>

                    {/* Submenu Items */}
                    <div className="pt-30px">
                        {menu.subMenu.map((sub, subIndex) => (
                            <p key={`subIndex_${subIndex}`} className="pb-4 cursor-pointer hover:underline tracking-wider">
                                {sub.name}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
            <div>
                <div className="text-lg font-semibold">Apple Premium Partner</div>
                <div className="w-100px pb-4 pt-30px">
                    <img src={'https://www.appstaging.dev/cdn/shop/files/Logo-Footer-Apple-Premium-Partner_100x@2x.svg?v=1704311490'} alt="Premium partner" />
                </div>
                <div className="w-130px pb-4">
                    <img src={'https://www.appstaging.dev/cdn/shop/files/Autho_Ser_Provi_2ln_blk_US_051117_1eebbd09-930c-4776-a2ae-9b2d3555747a_130x@2x.svg?v=1704470823'} alt="Authorized Service Provider" />
                </div>
                <div className="w-130px pb-4">
                    <img src={'https://www.appstaging.dev/cdn/shop/files/Authorized_Education_Specialist_2ln_blk_CAEN_110821_130x@2x.svg?v=1704312327'} alt="Authorized Education Specialist" />
                </div>
            </div>
            <div className="mt-16">
                <div className="flex justify-between">
                    <div></div>
                    <div></div>
                </div>
            </div>
        </footer>
    )
  }
export default Footer