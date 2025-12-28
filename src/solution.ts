function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string"){
        return value.toUpperCase();
    }

    if (typeof value === "number"){
        return value*10;
    }

    if(typeof value === "boolean"){
        return !value;
    }

    return 0;
}
console.log(formatValue(12));