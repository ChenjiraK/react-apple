export const emits = (fn: (value: any) => void, value: any) => {
    if (fn) {
        fn(value);
      } else {
        console.error('emits is not a function');
    }
} 