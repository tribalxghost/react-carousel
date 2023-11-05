import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";


it("renders without crashing", function(){
    render(<Card />)
  })
  
  it("matched snapchat", function(){
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
  })

