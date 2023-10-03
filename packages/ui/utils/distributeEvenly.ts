export const distributeEvenly = <T extends any>(items: T[], amountOfColumns: number) => {
    const modulo = items.length % amountOfColumns;
    const itemsPerColumn = (items.length - modulo) / amountOfColumns;

    const returnObject: {
        [key: number]: T[];
    } = {};

    for (let i = 0; i < amountOfColumns; i++) {
        returnObject[i + 1] = items.slice(itemsPerColumn * i, itemsPerColumn * (i + 1));
    }
    for (let i = 0; i < modulo; i++) {
        returnObject[i + 2].push(items[items.length - (i + 1)]);
    }
    return returnObject;
};
