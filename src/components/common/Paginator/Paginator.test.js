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

    test('if pages count is more than 10 and portionNumber is 1 only button NEXT must be present', () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let buttons = root.findAllByType('button');
        expect(buttons.length).toBe(1);
        expect(buttons[0].children[0]).toBe("Next");
    });

    test('if pages count is 30 and portionNumber is 2 buttons PREV and NEXT must be present', () => {
        const component = create(<Paginator totalItemsCount={30} pageSize={1} portionSize={10}  />);
        const root = component.root;
        const nextButton = root.findByType('button')
        nextButton.props.onClick();
        const buttons = root.findAllByType('button');
        expect(buttons.length).toBe(2);
        expect(buttons[0].children[0]).toBe('PREV');
        expect(buttons[1].children[0]).toBe('Next');
    });

    test('if pages count is 15 and portionNumber is 2 only button PREV must be present', () => {
        const component = create(<Paginator totalItemsCount={15} pageSize={1} portionSize={10}  />);
        const root = component.root;
        const nextButton = root.findByType('button')
        nextButton.props.onClick();
        const prevButton = root.findByType('button');
        expect(prevButton.length).toBe(1);
        expect(prevButton.children[0]).toBe('Prev');
    });
});