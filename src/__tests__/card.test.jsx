import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import Card from "../components/Card";

import { ThemeProvider } from "../contexts";
import { AuthContextProvider } from "../contexts/authContext";

describe ("Card component", () => {
    
        beforeEach(() => {
            render(
                <BrowserRouter>
                    <Card />
                </BrowserRouter>
            );
        });
    
        afterEach(() => {
            cleanup();
        });
    
        it("Displays a card with an image", () => {
            const card = screen.getByRole("img");
            expect(card).toBeInTheDocument();
        });
    
        it("Displays a card with a title", () => {
            const card = screen.getByText("Card title");
            expect(card).toBeInTheDocument();
        });
    
        it("Displays a card with a description", () => {
            const card = screen.getByText("Card description");
            expect(card).toBeInTheDocument();
        });
    
        it("Displays a card with a button", () => {
            const card = screen.getByRole("button");
            expect(card).toBeInTheDocument();
        });
    
        it("Displays a card with a link", () => {
            const card = screen.getByRole("link");
            expect(card).toBeInTheDocument();
        });
    });