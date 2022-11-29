const dayjs = require('dayjs');

module.exports = {
    format_time: (date) => {
        return dayjs(date).format('MMM DD, YYYY');
    }
}