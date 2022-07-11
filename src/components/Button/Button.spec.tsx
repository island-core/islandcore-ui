import React from "react";
import { act, create } from "react-test-renderer";
import { Button } from "./index";

describe("button tests", () => {
    it("render default button with no props correctly", () => {
        let button: any;

        act(() => {
            button = create(<Button>Button</Button>);
        });

        const tree = button.toJSON();

        expect(tree).toMatchSnapshot();

        expect(tree).not.toBeNull();
        expect(tree).not.toBeUndefined();

        expect(tree.children).toContain("Button");
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");
    });

    it("change classes depending on the prop `variant`", () => {
        let button: any;

        act(() => {
            button = create(<Button variant="red">Button</Button>);
        });

        let tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-red");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button variant="yellow">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-yellow");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button variant="green">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-green");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button variant="blue">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button variant="purple">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-purple");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button variant="dark">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-dark");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");
    });

    it("should add/remove `round` className", () => {
        let button: any;

        act(() => {
            button = create(<Button>Button</Button>);
        });

        let tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");

        act(() => {
            button.update(<Button round>Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");
    });

    it("should add/remove `ghost` className", () => {
        let button: any;

        act(() => {
            button = create(<Button>Button</Button>);
        });

        let tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--ghost");
        expect(tree.props.className).not.toContain("button--round");

        act(() => {
            button.update(<Button ghost>Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).toContain("button--ghost");
        expect(tree.props.className).not.toContain("button--round");
    });

    it("should change size of the button", () => {
        let button: any;

        act(() => {
            button = create(<Button size="small">Button</Button>);
        });

        let tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-small");

        act(() => {
            button.update(<Button size="medium">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");

        act(() => {
            button.update(<Button size="large">Button</Button>);
        });

        tree = button.toJSON();

        expect(tree).toMatchSnapshot();
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-large");
    });

    it("should call a callback function on click", () => {
        let button: any;

        const onClick = () => "onClick called";

        act(() => {
            button = create(<Button onClick={onClick}>Button</Button>);
        });

        const tree = button.toJSON();

        expect(tree.props.onClick()).toBe("onClick called");
    });

    //  FIXME: this test in NOT valid, we cannot test it like this
    // as a function in a tree will always be callable, no matter
    // if the prop `disabled` was given
    it("should not call a callback function on click on a disabled button", () => {
        let button: any;

        const onClick = () => "onClick called";

        act(() => {
            button = create(<Button onClick={onClick} disabled>Button</Button>);
        });

        const tree = button.toJSON();

        expect(tree.props.onClick()).toBeFalsy();
    });

    it("should call correct callback functions on key down/up event", () => {
        let button: any;

        const keyDownCb = () => "key down event";
        const keyUpCb = () => "key up event";

        act(() => {
            button = create(<Button onKeyDown={keyDownCb} onKeyUp={keyUpCb}>Button</Button>);
        });

        const tree = button.toJSON();

        expect(tree.props.onKeyDown()).toBe("key down event");
        expect(tree.props.onKeyUp()).toBe("key up event");
    });
});