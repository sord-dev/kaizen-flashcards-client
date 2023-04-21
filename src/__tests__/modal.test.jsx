import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import Modal from "../components/Modal";

import { ThemeProvider } from "../contexts";
import { AuthContextProvider } from "../contexts/authContext";

describe("Modal component", () => {
        beforeEach(() => {
            render(
                <BrowserRouter>
                <ThemeProvider>
                <AuthContextProvider>
                    <Modal />
                </AuthContextProvider>
                </ThemeProvider>
                </BrowserRouter>
            );
        });
    
        afterEach(() => {
            cleanup();
        });
    
        it("Displays a modal div", () => {
            const div = screen.getByRole("modal");
            expect(div).toBeInTheDocument();
        }
        );
    });