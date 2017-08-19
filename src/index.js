import countToEngine from './count-to-engine';

const defaultFormatter = num => num;

export default function countTo(el, options = {}) {
    const formatter = options.formatter || defaultFormatter;
    const to = options.to || parseInt(el.textContent, 10);
    const render = (num) => { el.textContent = formatter(num); };
    const config = Object.assign({}, options, { to, render });

    return countToEngine(config);
}
