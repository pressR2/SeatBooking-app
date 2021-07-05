import React from 'react';
import './App.css';
import SeatsChoice from './components/SeatsChoice';
import { useSelector } from 'react-redux';
import HallView from './components/HallView';
import { hallView } from './actions'
import { useDispatch } from 'react-redux';
import BookingInfo from './components/BookingInfo';

function App() {
 const dispatch = useDispatch();
 const navigation = useSelector(state => state.navigation);
 let contentToDisplay = <SeatsChoice onSubmit = {(values) => dispatch(hallView(values))}/>
  if (navigation.step === 2) {
      contentToDisplay = <HallView/>
  }
  if (navigation.step === 3) {
      contentToDisplay = <BookingInfo/>
  }

  return (
      <div className="App">
          {contentToDisplay}
      </div>
  );
}

export default App;
