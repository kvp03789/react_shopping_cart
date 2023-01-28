import React from "react"
import { BrowserRouter } from "react-router-dom";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { toBeInTheDocument } from "@testing-library/jest-dom/dist/matchers";
import userEvent from '@testing-library/user-event'
import Nav from './Nav';
import Home from './Home'
import Shop from './Shop'
import Cart from './Cart'


describe('Nav Component', () => {
  test('renders correctly', () => {
    render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>
    
    );
    const navLink = screen.getAllByRole("link");
    expect(navLink).toHaveLength(4);
  });


})

describe('Cart Component', () => {
  test('renders paragraph when cart empty', () => {
    render(
      <BrowserRouter>
        <Cart/>
      </BrowserRouter>
    )
    const emptyDescription = screen.getByText(/your cart is empty/i);
    expect(emptyDescription).toBeInTheDocument();
  })

  test('renders something different if items passed as props', () => {
    const someItems = ['1', '2', '3']
    render(
      <BrowserRouter>
        <Cart itemList={someItems}/>
      </BrowserRouter>
    )
    const otherDescription = screen.getByText(/you have items/i)
    expect(otherDescription).toBeInTheDocument();
  })
})

