export default function Timer({ time, count }) {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time % 60000) / 1000)
    const milliseconds = time % 1000
    const formattedTime = `
    ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0'
    )}:${String(milliseconds).padStart(3, '0').slice(0, 2)}`

    return (
        <div className='timer'>
            <p className='timer__text'>Timer: {formattedTime}</p>
            <p className='roll__text'>Roll counter: {count}</p>
        </div>
    )
}
