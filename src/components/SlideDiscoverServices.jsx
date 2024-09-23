import Slide from './Layout/Slide';
import CardTextItem from './Card/CardTextItem';

const SlideDiscoverServices = () => {
  const items = [
    {
        badgeLabel: 'PICKUP',
        badgeColor: '#707070',
        text: "<p><span style='color:#707070'>Delivery and Pickup. </span><span>Order online and get home delivery.</span></p>"
    },
    {
        badgeLabel: 'CYBER WEEK',
        badgeColor: '#5856d6',
        text: "<p><span>Exclusive deals online only. Four days</span><span style='color:#707070'> August 1-4. </span></p>"
    },
    {
        badgeLabel: 'UPGRADE',
        badgeColor: '#0071bc',
        text: "<p><span>Upgrade your.</span><span style='color:#0071bc'> iPhone 11 / iPhone 12 </span></p>"
    },
    {
        badgeLabel: 'FINANCING',
        badgeColor: '#0071bc',
        text: "<p><span> Get special financing.</span><span style='color:#0071bc'> Pay over time, interest-free. </span></p>"
    },
    {
        badgeLabel: 'IN STORE',
        badgeColor: '#707070',
        text: "<p><span>Learn, create, and be inspired in</span><span style='color:#707070'> hands-on sessions at your store. </span></p>"
    },
    {
        badgeLabel: 'SALE',
        badgeColor: '#008900',
        text: "<p><span style='color:#008900'> Find low everyday prices and buy</span><span> online for delivery or in-store pick-up. </span></p>"
    },
  ];
  return (
    <div>
      <div className="text-4xl font-semibold pl-9 mt-6">Discover services and more.</div>
      <Slide>
        {items.map((item,index) => (
          <div
            key={index}
            className="flex-shrink-0 ml-4"
          >
            <CardTextItem item={item}></CardTextItem>
          </div>
        ))}
      </Slide>
    </div>
  );
};
export default SlideDiscoverServices;