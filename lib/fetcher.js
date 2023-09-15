export const fetcher = (...args) =>
    fetch(...args, {
        cache: 'no-store',
        next: {
            revalidate: 0,
        },
    }).then(res => res.json())
