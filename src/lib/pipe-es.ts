export default function pipe<T>(value: T) {
    type AsyncAwareReturn<V> = ReturnType<typeof pipe<T extends Promise<unknown> ? Promise<V> : V>>;

    interface PipeFn<T> {
        <V>(fn: (value: Awaited<T>) => V): AsyncAwareReturn<V>;

        <V, P2>(fn: (value: Awaited<T>, arg: P2) => V, arg: P2): AsyncAwareReturn<V>;

        (): T;
    }

    return {
        /**
         * Pipe to a function provided as a first argument.
         * Call with no arguments to return the current value.
         */
        ᐅ: ((fn?: (x: T, ...args: unknown[]) => unknown, ...args: unknown[]) => {
            if (!fn) return value;

            const newValue =
                value instanceof Promise
                    ? value.then((result: Awaited<T>) => fn(result, ...args))
                    : fn(value, ...args);

            return pipe(newValue);
        }) as PipeFn<T>
    };
}
