export function formatRelativeTime(date: Date) {
    const rtf = new Intl.RelativeTimeFormat('pt', { numeric: 'auto' });
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);

    let value: number, unit: Intl.RelativeTimeFormatUnit;

    if (diffInSeconds < 60) {
        value = -diffInSeconds;
        unit = 'second';
    } else if (diffInSeconds < 3600) {
        value = -Math.floor(diffInSeconds / 60);
        unit = 'minute';
    } else if (diffInSeconds < 86400) {
        value = -Math.floor(diffInSeconds / 3600);
        unit = 'hour';
    } else if (diffInSeconds < 2592000) {
        value = -Math.floor(diffInSeconds / 86400);
        unit = 'day';
    } else if (diffInSeconds < 31536000) {
        value = -Math.floor(diffInSeconds / 2592000);
        unit = 'month';
    } else {
        value = -Math.floor(diffInSeconds / 31536000);
        unit = 'year';
    }

    return rtf.format(value, unit);
}
