import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus.tsx.old";

describe("ProfileStatus component", () => {
    test("status in props should be in the state", () => {
      const component = create(<ProfileStatus status="gsSocNet status" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("gsSocNet status");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="gsSocNet status" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children.length).toBe(1);
    });

    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="gsSocNet status" />);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="gsSocNet status" />);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe("gsSocNet status");
    });

    test("<input> should be displayed in editMode instead <span>", () => {
        const component = create(<ProfileStatus status="gsSocNet status" />);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe("gsSocNet status");
    });

    test("callback should be called at once", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="gsSocNet status" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
}); 

    

