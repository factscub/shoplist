import Header from './Components/Header/Header';
import RegisterShopDetails from './RegisterShopDetails/RegisterShopDetails';
import './App.css'

import { RootContextApi } from './Components/RootContextApi'
function App() {

  const area = ['Thane', 'Pune', 'Mumbai Suburban', 'Nashik', 'Nagpur', 'Ahmednagar', 'Solapur']
  const category = ['Grocery', 'Butcher', 'Baker', 'Chemist', 'Stationery shop']
  return (
    <div className='main'>
      <Header />
      <RootContextApi.Provider value={{ area, category }} >
        <RegisterShopDetails />
      </RootContextApi.Provider>
    </div>
  );
}

export default App;

