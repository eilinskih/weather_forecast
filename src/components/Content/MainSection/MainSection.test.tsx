import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import * as redux from 'react-redux';

import MainSection from './MainSection';

describe('MainSectionFC',() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
            const mockDispatchFn = jest.fn()
            useDispatchSpy.mockReturnValue(mockDispatchFn);

    test("component renders", () => {
        render(<MainSection inputValue="test value" main="test main" description="test description"/>)
        expect(screen.getByPlaceholderText('enter the city name...')).toBeInTheDocument()
    })

    test('render with props', () => {
        act(() => {
            render(<MainSection inputValue="test value" main="test main" description="test description"/>)
        });
        expect(screen.getByText("test main")).toBeInTheDocument()
        expect(screen.getByText("test description")).toBeInTheDocument()
        expect((screen.getByPlaceholderText('enter the city name...') as HTMLInputElement).value).toBe("test value")

    });

    test('onchange input', () => {
        const onChange = jest.fn();
        act(() => {
            render(<MainSection inputValue="test value" main="test main" description="test description"/>)
        })
        const input = screen.getByPlaceholderText('enter the city name...')
        input.onchange = onChange
        expect((input as HTMLInputElement).value).toBe("test value")

        act(() => {
            input.dispatchEvent(new Event("change", {bubbles: true}))
            input.dispatchEvent(new Event("change", {bubbles: true}))
        })
        expect(onChange).toHaveBeenCalledTimes(2);
    })
})