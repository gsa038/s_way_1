import React from 'react';
import { create } from 'react-test-renderer';
import Paginator from './Paginator';

describe('Paginator component tests', () => {
    test('pagesCount is 11 but should be show only 10', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let spans = root.findAllByType('span');
        expect(spans.length).toBe(10)
    });

    test('if pages count is more than 10 and current page is 1 only button NEXT must be present', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let buttons = root.findAllByType('button');
        expect(buttons.length).toBe(1);
        expect(buttons[0].children[0]).toBe("NEXT");
    });
});