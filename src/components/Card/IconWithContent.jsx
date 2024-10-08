import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const IconWithContent = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <div className="flex flex-col justify-start text-center max-w-246px gap-1">
        <Icon className='text-3xl' icon={item.icon} />
        <h2 className='pt-4'>{item.title}</h2>
        <p className='min-h-20'>{item.detail}</p>
        <a className='pt-4 flex items-center gap-2 justify-center' href=' '>
            <p>Learn more</p>
            <Icon icon="fa-solid fa-chevron-right"></Icon>
        </a>
    </div>
  );
};

export default IconWithContent;
