const sum = (a) => {
    let subtotal = a;

    function f(b) {
        subtotal += b;
        return f;
    }

    f.toString = () => {
        return subtotal;
    };

    return f;
};

alert('sum(3)(4) = ' +  sum(3)(4));

let user = {
    name: "Daniel",
    info: {
        age: 20,
        gender: "male"
    }
};

let clone = JSON.parse(JSON.stringify(user));

console.log("Obj user:", user, "Obj clone:", clone);
