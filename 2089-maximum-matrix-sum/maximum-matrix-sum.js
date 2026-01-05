var maxMatrixSum = function(matrix) {
    let neg = 0;
    let minAbs = Infinity;
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const v = matrix[i][j];
            if (v < 0) neg++;
            const abs = v < 0 ? -v : v;   // faster than Math.abs
            sum += abs;
            if (abs < minAbs) minAbs = abs;
        }
    }

    return (neg & 1) === 0 ? sum : sum - (minAbs << 1);
};
