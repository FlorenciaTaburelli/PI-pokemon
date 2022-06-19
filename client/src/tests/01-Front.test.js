import Home from '../components/Home/Home.jsx'
import isReact from 'is-react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Cards from '../components/Cards/Cards.jsx'

Enzyme.configure({ adapter: new Adapter() });  


describe("Test-Front", () => {
    let home;  

    beforeEach(() => {
        home = shallow(<Home />);  // shallow permite testear sin renderizar el componente
        expect(isReact.classComponent(Home)).toBeTruthy();
      });

    it('Debería renderizar un div contenedor', () => {
       expect(home.find('div')).toHaveLength(1);
    });
    it('Debería renderizar un componente <Cards />', () => {
      expect(home.find(Cards)).toHaveLength(1);
   });
})
