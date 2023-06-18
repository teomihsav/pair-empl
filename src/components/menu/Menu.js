import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';

import MenuDsplay from './MenuDisplay'


const menuArr = [
  {
    'Solutions': [
      { id: 1, },
      { 'Commerce': 'Increase revenue with Conventional Commerce' },
      { 'Customer Care': 'Deliver personalized customer service' }
      // 'By Industry': [{ 'Telco & Cable': 'Maximize retention, minimize cost' }, { Healthcare: 'Streamline call center operations' }]
    ]
  },
  {
    ['Success Services']: [
      { id: 2 },
      { ['Professional Services']: 'Our professional services experts prepare you to engage in the conversational world' },
      { ['Gainshare']: 'Our fully managed contact center solution transforms your Conversational operations at scale' }
    ]
  }
]

const Menu = () => {

  // const { pathname } = useLocation();

  const refMenu = useRef([
    {
      mainItem: {
        text: 'testOne',
        link: '',
        role: ['admin', 'employee'],
      },
      iconId: 'android-alarm-clock',
      subMenu: [
        {
          text: 'testTwo',
          link: '/timesheet-overview',
          // isActive: pathname === '/timesheet-overview',
          role: ['admin', 'employee'],
        },
        {
          text: 'testThree',
          link: '/timesheet-submission',
          // isActive: pathname === '/timesheet-submission',
          role: ['admin', 'employee'],
        },
        {
          text: 'testFour',
          link: '/timesheet-monthly',
          // isActive: pathname === '/timesheet-monthly',
          role: ['admin', 'employee'],
        },
      ],
    }
  ])
  console.log('navItems: ', refMenu)


  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} >
      {
        menuArr.map(el => {
          // console.log(el)
          console.log('id: ', Object.entries(el)[0][1][0])
          return <MenuDsplay key={Object.entries(el)[0][1][0].id} menu={el} />
        }
        )
        // return <div style={{ border: 'solid 2px', padding: '1rem', textAlign: 'center', cursor: 'pointer' }}>{el}</div>
      }
    </div>
  )
}

export default Menu