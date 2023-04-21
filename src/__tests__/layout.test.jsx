import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";

import { ThemeProvider } from "../contexts";
import { AuthContextProvider } from "../contexts/authContext";

describe("Layout component", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
            <ThemeProvider>
            <AuthContextProvider>
                <Layout />
            </AuthContextProvider>
            </ThemeProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Displays a nav bar with two children", () => {
        const navBar = screen.getByRole("navigation");
        expect(navBar.children.length).toBe(2);
    });

    it("Displays a profile image", () => {
        const profileImg = screen.getByRole("button");
        expect(profileImg).toBeInTheDocument();
    });

    it("Displays a footer with two children", () => {
        const footer = screen.getByRole("contentinfo");
        expect(footer.children.length).toBe(2);
    });

    it("Active link is underlined", () => {
        const activeLink = screen.getByText("Home");
        expect(activeLink).toHaveClass('active');
    });
});