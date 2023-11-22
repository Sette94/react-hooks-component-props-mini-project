import React from "react";

function Minutes({ minutes }) {
    console.log(minutes)


    function readingInfo(minutes) {
        const coffee = "☕️"
        const roundedMinutes = Math.ceil(minutes / 5) * 5
        const repeatNumber = roundedMinutes / 5
        return coffee.repeat([repeatNumber]) + roundedMinutes + " Min read"

    }
    return readingInfo(minutes)

}

export default Minutes