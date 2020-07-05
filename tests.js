function _almostEqual(a, b) {
    return Math.abs(a - b) < 0.1;
}

function testComputeModelPrice() {
    return _almostEqual(computeModelPrice("m2", 300), 115);
}

function testComputeModelPriceSqFt() {
    return _almostEqual(computeModelPrice("sqft", 2000), 109.2);
}

function testComputeRenderingCountDiscountedPrice() {
    return _almostEqual(computeRenderingCountDiscountedPrice(true, 2, 2), 680);
}

function testComputePrice() {
    return _almostEqual(computePrice(false, "m2", 300, true, 2, 2), 795);
}

test_functions = [testComputeModelPrice, testComputeModelPriceSqFt, testComputeRenderingCountDiscountedPrice, testComputePrice];
for (let test_function of test_functions) {
    console.log(test_function());
}

