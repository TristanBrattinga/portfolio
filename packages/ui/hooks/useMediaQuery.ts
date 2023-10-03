import { useCallback, useSyncExternalStore } from "react";

function useMediaQuery(query: string): boolean {
    const subscribe = useCallback(
        (callback: () => void) => {
            const matchMedia = window.matchMedia(query);
            if (matchMedia?.addEventListener) {
                matchMedia.addEventListener("change", callback);
            } else {
                matchMedia.addListener(callback);
            }
            return () => {
                if (matchMedia?.removeEventListener) {
                    matchMedia.removeEventListener("change", callback);
                } else {
                    matchMedia.removeListener(callback);
                }
            };
        },
        [query]
    );

    const getSnapshot = useCallback(() => {
        return window.matchMedia(query).matches;
    }, [query]);

    const getServerSnapshot = useCallback(() => {
        return false;
    }, []);

    const matches = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    return matches;
}

export default useMediaQuery;
