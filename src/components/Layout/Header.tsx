import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faStore, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import PartnerImage from '../Image/PartnerImage';
import PremiumPartnerLogo from '../Image/PremiumPartnerLogo';
import SearchInput from '../Input/SearchInput';
import SwitchLanguage from '../Topbar/SwitchLanguage';
import TopbarMenu from '../Topbar/TopbarMenu';

const Herder: React.FC = () => {
  const navigator = useNavigate();
  const onClickRoute = (path: string) => {
    navigator(path);
  };
  return (
    <header className="flex sm:justify-center w-full text-sm bg-white border-b pb-5 px-4">
      <div className="hidden sm:block w-main-page">
         <div className={'flex justify-center gap-4 h-24 p-3 items-center'}>
            <div>
               <Link to="/">
                  <PartnerImage />
               </Link>
            </div>
            <div className='w-40'>
               <PremiumPartnerLogo />
            </div>
            <SearchInput />
            <div id="store-name" className="flex w-72 mx-2 cursor-pointer">
               <Icon icon={faStore} className="mx-2 self-center" />
               <p className="truncate w-full">Apple Third Street Promenade</p>
            </div>
            <SwitchLanguage />
            <div
               id="profile-icon"
               className="mx-2 cursor-pointer"
               onClick={() => onClickRoute('/login')}
            >
               <Icon className="text-xl" icon={faUser} />
            </div>
            <div id="checkout-icon" className="mx-2 cursor-pointer">
               <Icon className="text-xl" icon={faBagShopping} />
            </div>
         </div>
        <TopbarMenu />
      </div>
      <div className='sm:hidden w-full flex justify-between self-center mt-5'>
         <div className='self-center'>
            <Icon className="text-xl" icon={faUser} />
         </div>
         <div className='flex justify-start items-center'>
            <Link to="/">
               <PartnerImage />
            </Link>
            <div className='w-20 mx-3'>
               <PremiumPartnerLogo />
            </div>
         </div>
         <div className='flex items-center'>
            <Icon className="text-xl mx-4" icon={faUser} />
            <Icon className="text-xl" icon={faBagShopping} />
         </div>
      </div>
    </header>
  );
};
export default Herder;
