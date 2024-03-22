interface TestComponentProps {
  numberOne: number;
  numberTwo: number;
}

export const TestComponent = ({numberOne, numberTwo}: TestComponentProps) => {
  const sumTest = (a: number, b: number) => {
    return a + b
  }
  return <div className="test-compo">Hello {sumTest(numberOne, numberTwo)}</div>
}