const add = (a,b) => {
    return a+b
}

test('expect add function', () => 
    { 
        expect(add(1,2)).toBe(3);
    }
);