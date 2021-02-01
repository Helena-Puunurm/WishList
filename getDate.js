exports.getDate = function() {
    let today = new Date();

    //date formatting options
    let options = {
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);
    return day;
}

exports.getWeekDay = function() {
    let today = new Date();
    let options = {
        weekday: "long"
    };

    let day = today.toLocaleDateString("en-US", options);
    return day;
}