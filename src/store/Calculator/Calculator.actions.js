export function sum (a, b) {
    return {
        type: 'SUM',
        payload: [a, b]
    }
}

export function subtact (a, b) {
    return {
        type: 'SUBTACT',
        payload: [a, b]
    }
}