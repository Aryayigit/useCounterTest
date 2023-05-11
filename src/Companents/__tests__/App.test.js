import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

beforeEach(() =>{
    render(<App/>);
});

test("counter is starting value 0",()=>{
    const counterEl = document.getElementById("countValue");
    expect(counterEl).toHaveTextContent("0");
});

test("is there a 'click' button in it",()=>{
    const buttonEl = document.getElementById("clickButton");
    expect(buttonEl).toBeEnabled();
    expect(buttonEl).toHaveTextContent("Click");
});

test("mouse down button", ()=>{
    // Kullanıcıyı simüle edebilmek için mouse'a basılı tutma fonksiyonunu denedim ama doğru çalıştıramadım.
    const counterEl = document.getElementById("countValue");
    console.log(counterEl.innerHTML);
    fireEvent.pointerDown(counterEl);
    userEvent.click(counterEl)
    console.log(document.getElementById("countValue").innerHTML);
});