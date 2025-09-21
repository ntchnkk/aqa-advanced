const divide = (numerator, denominator) => {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error ("Both arguments must be numbers")
    }
    if (denominator === 0) {
        throw new Error ("Division by zero is not allowed")
    }
    return numerator / denominator;
}

try {
    console.log('Result:', divide(10, '2'));
} catch (error) {
    console.log("There is an error:", error.message);
} finally {
    console.log('Operation completed');
};

try {
    console.log('Result:', divide('two', 2));
} catch (error) {
    console.log("There is an error:", error.message);
}finally {
    console.log('Operation completed');
};

try {
    console.log('Result:', divide(10, 2));
} catch (error) {
    console.log("There is an error:", error.message);
}finally {
    console.log('Operation completed');
};

try {
    console.log('Result:', divide(10, 0));
} catch (error) {
    console.log("There is an error:", error.message);
}finally {
    console.log('Operation completed');
};