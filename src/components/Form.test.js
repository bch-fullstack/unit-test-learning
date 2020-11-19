import { shallow } from 'enzyme'
import Form from './Form'

describe('Form component', () => {
    test('initiate with empty values', () => {
        const mockHandleChange = jest.fn();
        const wrapper = shallow(<Form handleChange={mockHandleChange}/>);
        const firstInput = wrapper.find('#firstName')
        const secondInput = wrapper.find('#lastName')
        expect(secondInput.props().value).toBe('');
        // expect(firstInput.props().value).toBe('');
    })

    test('should allow us to change input values', () => {
        const mockHandleChange = jest.fn();
        const wrapper = shallow(<Form handleChange={mockHandleChange}/>);
        let firstInput = wrapper.find('#firstName');
        const secondInput = wrapper.find('#lastName');

        firstInput.simulate('change', { target: { value: 'test' } });

        // firstInput = wrapper.find('#firstName');

        expect(mockHandleChange).toHaveBeenCalled();

        // expect(secondInput.props().value).toBe('');
        // expect(firstInput.props().value).toBe('test');
    })

    test('should allow us to change input values', () => {
        const mockHandleChange = jest.fn();
        const placeHolderFirstName = 'tester name';
        const wrapper = shallow(<Form handleChange={mockHandleChange} placeHolder={placeHolderFirstName}/>);
        let firstInput = wrapper.find('#firstName');
        const secondInput = wrapper.find('#lastName');
        const testParam = {
            target: {
                id: 'testId',
                value: 'testValue'
            }
        };

        >>unit<< test 

        // firstInput.simulate('change', testParam);

        // firstInput = wrapper.find('#firstName');

        expect(firstInput.props().value).toBe(placeHolderFirstName);

        // expect(mockHandleChange).toHaveBeenCalledWith(testParam);

        // expect(secondInput.props().value).toBe('');
        // expect(firstInput.props().value).toBe('test');
    })
})