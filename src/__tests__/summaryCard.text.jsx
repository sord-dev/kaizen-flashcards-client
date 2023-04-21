import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";
import { SummaryCard } from "../components";

import { ThemeProvider } from "../contexts";
import { AuthContextProvider } from "../contexts/authContext";

describe("SummaryCard component", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
            <ThemeProvider>
            <AuthContextProvider>
                <SummaryCard />
            </AuthContextProvider>
            </ThemeProvider>
            </BrowserRouter>
        );
    });

    afterEach(() => {
        cleanup();
    });
}
);
