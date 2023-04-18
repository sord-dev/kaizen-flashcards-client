import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

describe("Layout component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a nav bar with four children", () => {
        const navBar = screen.getByRole("navigation");
        expect(navBar.children.length).toBe(4);
    });

    it("Displays a profile image", () => {
        const profileImg = screen.getByAltText("profile image");
        expect(profileImg).toBeInTheDocument();
    });

    it("Displays a footer with two children", () => {
        const footer = screen.getByRole("contentinfo");
        expect(footer.children.length).toBe(2);
    });

    it("Active link is underlined", () => {
        const activeLink = screen.getByText("Home");
        expect(activeLink).toHaveStyle("text-decoration: underline #FAD97F;");
    });
});