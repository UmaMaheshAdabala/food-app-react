import { render, screen,  } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("should contactus component load",()=>{
    render(<Contact/>)
    const heading = screen.getByRole("heading");

    // Assersion
    expect(heading).toBeInTheDocument();
});

test("should contactus component load",()=>{
    render(<Contact/>)
    const button = screen.getByRole("button");

    // Assersion
    expect(button).toBeInTheDocument();
});

test("should contactus component load",()=>{
    render(<Contact/>)
    const submit = screen.getByText("Submit");

    // Assersion
    expect(submit).toBeInTheDocument();
});

test("should contactus component load",()=>{
    render(<Contact/>)
    const input = screen.getAllByRole("textbox");

    // Assersion
    expect(input.length).toBe(2);
});