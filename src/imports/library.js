const secondsToHms = (time) => {
    if (!time) {
        return '';
    }

    let hours = Math.floor(time / 3600);
    let minutes = Math.ceil((time - (hours * 3600)) / 60);

    if (!hours) {
        return minutes + ' min';
    } else {
        return `${hours}h${minutes}`;
    }
}

module.exports = secondsToHms;
