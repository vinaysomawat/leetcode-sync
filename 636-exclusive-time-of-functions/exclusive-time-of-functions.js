var exclusiveTime = function(n, logs) {
    const result = new Array(n).fill(0);
    const stack = [];
    let prevTime = 0;

    for (let log of logs) {
        let [id, type, time] = log.split(":");
        id = Number(id);
        time = Number(time);

        if (type === "start") {
            // If another function was running, add its time
            if (stack.length > 0) {
                result[stack[stack.length - 1]] += time - prevTime;
            }

            stack.push(id);
            prevTime = time;

        } else { // "end"
            // Finish current function
            result[stack.pop()] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }

    return result;
};
