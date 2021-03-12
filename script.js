// Collects values, passes them to climbingStairs(), then returns them to HTML
function getValues() {
    // Validate if input is a number
    const input = document.getElementById("input").value
    if (input === "") {
        document.getElementById("result").innerHTML = "Please enter a number.";
    } else {
        let totalSteps = Number(input);
        let result = climbingStairs(totalSteps);
        document.getElementById("result").innerHTML = result;
    }
}

// Solve climbing stairs problem
function climbingStairs(totalSteps) {

    // If input is up to 2, result will be the same as input
    if (totalSteps <= 2) {
        let result = 0;
        return result = totalSteps;
    }

    /* The logic to solve this is recursive, so this function has to call itself.
    The number of steps for the input is the sum of the number of steps of the two
    preceeding numbers */
    return climbingStairs(totalSteps - 1) + climbingStairs(totalSteps - 2);
}

