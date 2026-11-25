export const sortTransform = (sortType: string | undefined | null) => {
    if (sortType === undefined || sortType === null) {
        return 'DATE_DESC';
    }

    if (sortType === "DATE_ASC" || sortType === "DATE_DESC" || sortType === "DESC" || sortType === "ASC") {
        return sortType;
    }

    return false;
}