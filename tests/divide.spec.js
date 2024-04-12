// UNCOMMENT THE CODE BELOW TO START

/*

describe("Iteration 2", () => {
    describe("Function - divide", () => {
        
        // Each `it` block represents 1 test. You can use the following as a template:
        it("", () => {});

    })    
})

*/

describe("Iteration 2", () => {
    describe("Function divide", () => {
        it("should be defined", () => {
            expect(divide).toBeDefined();
        });

        it("should take two arguments", () => {
            expect(divide.length).toBe(2);
        });

        it("should return the division of the two numbers", () => {
            expect(divide(1, 2)).toEqual(0.5);
            expect(divide(3, 4)).toEqual(0.75);
            expect(divide(38, 2)).toEqual(19);
        });

        it("should return undefined if any of the arguments is not provided", () => {
            expect(divide(1)).toEqual(undefined);
            expect(divide()).toEqual(undefined);
            expect(divide(undefined, 1)).toEqual(undefined);
        });

        it("should return undefined if any of the arguments is not a number", () => {
            expect(divide('test', 1)).toEqual(undefined);
            expect(divide(-6, 'test')).toEqual(undefined);
            expect(divide('try', 'catch')).toEqual(undefined);
            expect(divide(0, true)).toEqual(undefined);
            expect(divide(false, 10)).toEqual(undefined);
        });

    });
});