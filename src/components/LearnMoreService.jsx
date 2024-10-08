import React from 'react';
import IconWithContent from './Card/IconWithContent';

const LearnMoreService = () => {
    const services = [
        {
            id:'service_1',
            icon: 'fa-regular fa-user',
            title: 'Get expert service and support',
            detail: 'From setting up your device to replacing the screen, Apple Support has you covered.',
            link: '',
        },
        {
            id:'service_2',
            icon: 'fa-regular fa-credit-card',
            title: 'Financing and credit plans',
            detail: 'Pay over time or pay with your Apple Card and get 3% daily cash back. The choice is yours.',
            link: ''
        },
        {
            id:'service_3',
            icon: 'fa-solid fa-truck',
            title: 'Buy online, pick up in-store',
            detail: 'Place your order online and pick it up at a local store.',
            link: ''
        }
    ]
    return (
        <div>
            <div className='flex justify-around w-main-page'>
                {services.map(item=> (
                    <IconWithContent key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default LearnMoreService;

