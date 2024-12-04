export const emits = (emitFunc, value) => {
    if (typeof emitFunc === 'function') {
        return emitFunc(value);
    } else {
        console.error('emits is not a function');
    }
} 