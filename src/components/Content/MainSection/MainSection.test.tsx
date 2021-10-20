import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import * as redux from 'react-redux';

import MainSection from './MainSection';

describe('MainSectionFC',() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
            const mockDispatchFn = jest.fn()
            useDispatchSpy.mockReturnValue(mockDispatchFn);

    let container: Element | null;
    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });
    
    afterEach(() => {
        unmountComponentAtNode(container as Element);
        (container as Element).remove();
        container = null
    });

    test('render with props', () => {
        act(() => {
            render(<MainSection inputValue="test value" main="test main" description="test description"/>, container )
        });
        expect((container as Element).getElementsByTagName("h1")[0].textContent).toBe("test main")
        expect((container as Element).getElementsByTagName("p")[0].textContent).toBe("test description")
        expect((container as Element).getElementsByTagName("input")[0].value).toBe("test value")
    });

    test('onchange input', () => {
        const onChange = jest.fn();
        act(() => {
            render(<MainSection inputValue="test value" main="test main" description="test description"/>, container)
        })
        const input = (container as Element).getElementsByTagName("input")[0]
        input.onchange = onChange
        expect(input.value).toBe("test value")

        act(() => {
            input.dispatchEvent(new Event("change", {bubbles: true}))
            input.dispatchEvent(new Event("change", {bubbles: true}))
        })
        expect(onChange).toHaveBeenCalledTimes(2);
    })
})