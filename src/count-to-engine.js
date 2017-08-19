const linear = (t, b, e, d) => (e * t / d + b); // eslint-disable-line no-mixed-operators
const defaultRender = () => { throw Error('Render method is required'); };
const buidConfig = options => Object.assign({
    from: 0,
    to: 100,
    duration: 1000,
    easing: linear,
    render: defaultRender
}, options);

export default function countToEngine(options) {
    const config = buidConfig(options);
    const { from, to, duration, render, easing: next } = config;
    const end = (to - from);
    let interval = null;
    let started = null;

    function loop(timestamp) {
        if (started === null) {
            started = timestamp;
        }

        const elapsed = Math.min(timestamp - started, duration);
        const value = next(elapsed, from, end, duration);

        render(value);

        interval = (elapsed < duration)
            ? requestAnimationFrame(loop)
            : null;
    }

    function cancel() {
        if (interval !== null) cancelAnimationFrame(interval);
    }

    interval = requestAnimationFrame(loop);

    return cancel;
}
