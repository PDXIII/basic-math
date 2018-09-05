# Math Question

This is the reprentation of a math problem the user should solve.

```
    const problem = {
        "id": "5f11d99c-25c9-4143-be87-da3868860016",
        "type": "ADDITION",
        "num1": 1,
        "num2": 2,
        "result": 3,
        "str": "1 + 2 = 3"
      };

    const rightOrWrong = () => (
            console.log('happy')
        );

    <MathQuestion 
        problem={problem}
        rightOrWrong={rightOrWrong}
    />
```