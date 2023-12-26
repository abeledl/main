import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
// import PrompterComponent from '../PrompterComponent';
// import SpanComponent from '../SpanComponent';
import StageComponent from '../StageComponent';

test('should render the prompter with the span elements', () => {
    const englishData = ['Hellolfskjdflksjdklfsdkjflsjd'];
    const spanishData = [];

    const setCompleted = vi.fn();
    const setObjectData = vi.fn();
    const objectData = { current: [] };

    // render(
    //     <PrompterComponent
    //         data={englishData}
    //         setCompleted={setCompleted}
    //         setObjectData={setObjectData}
    //         objectData={objectData}
    //     />
    // )

    // render(
    //     <PrompterComponent
    //         data={spanishData}
    //         setCompleted={setCompleted}
    //         setObjectData={setObjectData}
    //         objectData={objectData}
    //     />
    // )

    const allTextData = {englishText: ["heloooooooooooooooo", "aaaaaaaaaaaaa"]}
    render(
        <StageComponent
            data={allTextData}
        />
    )
    // const spans = screen.getAllByRole('span');
    // console.log("spans: ", spans[0].innerHTML);
    // // check if the span elements are rendered and have the expected text content
    // expect(spans).toHaveLength(englishData.length + spanishData.length);
    // // console.log("print span: ", spans[0].children[0].textContent)
    // const englishSpanArray = spans.slice(0, englishData.length)
    // const spanishSpanArray = spans.slice(englishData.length, spans.length)

    // console.log("english span  span array: ", englishSpanArray[0].innerHTML);
    // expect(englishSpanArray).toHaveLength(englishData.length)
    // expect(spanishSpanArray).toHaveLength(spanishData.length)


    // englishSpanArray.forEach((englishSpan, index) => {
    //     // expect(englishSpan.children).toContain([<span></span>])
    // })

    const htmlElement = screen.getByText("heloooooooooooooooo")

    // const wrapper = mount(MyComponent)
    // // find the div element by id
    // const div = wrapper.find('#my-div')
    // // check if the div element contains a p element
    // expect(div.find('p').exists()).toBe(true)


    // expect(spans[0].text()).toContain('Exp'); // Check if text contains a substring
    // spans.forEach((span, index) => {
    //     expect(span).toHaveTextContent(data[index]);
    // });
});