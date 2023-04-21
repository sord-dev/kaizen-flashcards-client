import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import { UserForm } from "../components";

import { ThemeProvider } from "../contexts";
import { AuthContextProvider } from "../contexts/authContext";

describe("UserForm component", () => {
    it("Displays a form with two inputs", () => {
        render(
            <BrowserRouter>
            <ThemeProvider>
            <AuthContextProvider>
                <UserForm />
            </AuthContextProvider>
            </ThemeProvider>
            </BrowserRouter>
        );
        const form = screen.getByRole("form");
        expect(form.children.length).toBe(2);
    });
    it ("Displays a form with a submit button", () => {
        render(
            <BrowserRouter>
            <ThemeProvider>
            <AuthContextProvider>
                <UserForm />
            </AuthContextProvider>
            </ThemeProvider>
            </BrowserRouter>
        );
        const submitBtn = screen.getByRole("button");
        expect(submitBtn).toBeInTheDocument();
    });
});