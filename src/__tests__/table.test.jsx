import React from "react";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {screen, render, cleanup} from '@testing-library/react';
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers)

import { BrowserRouter } from "react-router-dom";

import { Table } from "../components/Table";

describe("Table component", () => {

        const fakeDecks = [
            {deck_id: 1,
             name: "fake"
            }
        ]
    
        beforeEach(() => {
            render(
                <BrowserRouter>
                    <Table items={fakeDecks}/>
                </BrowserRouter>
            );
        });
    
        afterEach(() => {
            cleanup();
        });
    
        it("Displays a create deck button", () => {
            const createDeckButton = screen.getByRole("button");
            expect(createDeckButton).toBeInTheDocument();
        });

        it("Displays the fake deck", () => {
            const fakeDeck = screen.getByText("fake");
            expect(fakeDeck).toBeInTheDocument();
        });
});


