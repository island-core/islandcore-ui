import React from "react";
import renderer, { act } from "react-test-renderer";
import { Button } from "./Button";

describe("button tests", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<Button>Button</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("contains classes depending on the given props", () => {
        let button;

        act(() => {
            button = renderer.create(<Button>Button</Button>);
        });

        expect(button).not.toBeNull();
        expect(button).not.toBeUndefined();

        // @ts-ignore - this is surely NOT undefined here
        const tree = button.toJSON();

        expect(tree).not.toBeNull();
        expect(tree.children).toContain("Button");
        expect(tree.props.className).toContain("button");
        expect(tree.props.className).toContain("button--variant-blue");
        expect(tree.props.className).toContain("button--size-medium");
        expect(tree.props.className).not.toContain("button--round");
        expect(tree.props.className).not.toContain("button--ghost");
    });
})
