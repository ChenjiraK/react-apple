import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';


function SwitchLanguage(){
    const textLang = 'English'
    return(
       <div className='flex cursor-pointer'>
            <p>{ textLang }</p>
            <Icon icon="fa-solid fa-chevron-down" className='self-center mx-3' />
       </div>
    )
  }
export default SwitchLanguage