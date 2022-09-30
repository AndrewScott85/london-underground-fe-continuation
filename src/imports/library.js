const secondsToHms = (time) => {
    if (!time) {
        return '';
    }

    let hours = Math.floor(time / 3600);
    let minutes = Math.ceil((time - (hours * 3600)) / 60);

    if (!hours) {
        return minutes + ' min';
    } else if (minutes > 9) {
        return `${hours}h${minutes}`;
    } else {
        return `${hours}h0${minutes}`;
    }
}

module.exports = secondsToHms;
