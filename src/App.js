import React, { createContext, useEffect, useState } from 'react';

import './App.css';
import PairEmployee from './apps/PairEmployee';
import UseContext from './components/UseContextChangeMood';
import UseReducerExample from './components/UseReducerExample';
import Counter from './components/UseSateCounter';
import UseMemo from './components/UseMemo-UseCallback';
import ReduxExample from './components/reduxExample/ReduxExample';
import { store } from './components/reduxExample/store';
import { Provider } from 'react-redux';
import AddField from './components/addField/AddField';
import TestFunctions from './components/TestFunctions';
import Search from './components/Search';
import Accordion from './components/accordion/Accordion';
import Menu from './components/menu/Menu';
import PromiseTest from './components/PromiseTest_Focus_Timer';
import ElementAdd from './components/ElementAddSecondTry.js';
import TestDome from './components/TestDome/ToggleParagraph';
import OnFocusInput from './components/TestDome/OnFocusInput';
import GroceryAppMain from './components/TestDome/GroceryApp';
import ChangeUsername from './components/TestDome/ChangeUsername';
import { SplitScreen } from './components/Data-Pattern-LinkedIn/layout-SplitScreen/SplitScreen';
import { RegularList } from './components/Data-Pattern-LinkedIn/listItems/RegularList';
import { people, products } from './data/data';
import SmallPersonList from './components/Data-Pattern-LinkedIn/listItems/people/SmallPersonList';
import LargePersonList from './components/Data-Pattern-LinkedIn/listItems/people/LargePersonList';
import Modal from './components/Data-Pattern-LinkedIn/modal/Modal';
import UseStateCounter from './components/UseSateCounter';
import FocusInput from './components/FocusInput';
import RercursionCompObjectDisplay from './components/Data-Pattern-LinkedIn/Functional-Programming/recursive-component/RercursionCompObjectDisplay';
import {
  DangerButton,
  SuccessButton,
} from './components/Data-Pattern-LinkedIn/Functional-Programming/component_composition/composition';
import CheckBox from './components/Hooks/CheckBox';
import StarsSelected from './components/Hooks/StarsSelected';
import UseInput from './components/Hooks/UseInput';
import LazyLoading from './components/lazyLoading/LazyLoading';
import TestClass from './components/class-components/TestClass';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './AppRouter';
import { ToApp } from './components/ContextShowDrawbacks';
// import DogImages from './components/HOC/DogImages';

export const MoodContext = createContext();

function App() {
  const [render, renderSet] = useState(1000);
  const [mood, moodSet] = useState(true);

  useEffect(() => {
    console.log(render);
  }, [render]);

  const nestedObject = {
    a: 1,
    b: {
      b1: 4,
      b2: {
        b23: 'Hello',
      },
      b3: {
        b31: {
          message: 'Hi',
        },
        b32: {
          message: 'Hi',
        },
      },
    },
    c: {
      c1: 2,
      c2: 3,
    },
  };

  const accordion = [
    {
      title: 'Lorem One',
      content: 'Lorem ................................................ One',
    },
    {
      title: 'Lorem Two',
      content: 'Lorem ................................................ Two',
    },
    {
      title: 'Lorem Three',
      content: `
    <p>Lorem ................................................Three</p>
    <p>Lorem ................................................Three</p>
    `,
    },
  ];
  // ---
  const day = 'wednesday';
  const values = {
    monday: 0,
    tuesday: 1,
    wednesday: 2,
  };
  const value = values[day] ?? -1;
  console.log('Day we looked for: ', value);

  const Left = ({ name }) => (
    <div style={{ backgroundColor: 'lightblue' }}> {name} </div>
  );
  const Right = ({ work }) => (
    <div style={{ backgroundColor: 'lightgreen' }}> {work} </div>
  );

  return (
    <BrowserRouter>
      <Provider store={store}>
        <MoodContext.Provider value={mood}>
          <header className="App-header">
            <SplitScreen weights={[1, 3]}>
              <Left name="Teo" />
              <Right work="Dev" />
            </SplitScreen>

            <SplitScreen
              left={Left}
              right={Right}
              leftWeight={1}
              rightWeight={3}
            />

            <PromiseTest />

            <TestClass />
            <StarsSelected />
            <UseInput />

            <AppRouter />
            <Link to="lazy">Lazy Load</Link>
            <ToApp />

            {/*<RercursionCompObjectDisplay data={nestedObject} />*/}
            <DangerButton text={"Don't Do it"} />
            <SuccessButton text={'Do it'} />
            <Modal>
              <RegularList
                items={people}
                resourceName="person"
                itemComponent={SmallPersonList}
              />
              <RegularList
                items={people}
                resourceName="person"
                itemComponent={LargePersonList}
              />
            </Modal>

            <ChangeUsername />
            <Menu />
            <ElementAdd />

            <AddField />
            <TestFunctions />

            <Search />

            <PairEmployee />

            <button onClick={() => renderSet((prev) => prev + 1)}>
              {' '}
              Render component{' '}
            </button>
            <Counter render={render} />

            <UseReducerExample />
            <ReduxExample />
            {/*<UseSateInitialRender />*/}
            <UseMemo />
            <UseStateCounter />
            <FocusInput />

            {accordion.map((el) => (
              <Accordion key={el.title} title={el.title} content={el.content} />
            ))}

            <button onClick={() => moodSet(!mood)}> Change Mood </button>
            <UseContext />
          </header>
        </MoodContext.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
