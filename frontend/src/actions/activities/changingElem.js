export function fetchCHANGERATING(value) {
    return {
        type: 'CHANGE_RATING',
        value
    }
}

export function fetchCHANGECATEGORY(category) {
    return {
        type: 'CHANGE_CATEGORY',
        category
    }
}

export function fetchCHANGENAME(name) {
    return {
        type: 'CHANGE_NAME',
        name
    }
}

export function fetchCHANGEDESCRIPTION(description) {
    return {
        type: 'CHANGE_DESCRIPTION',
        description
    }
}

export function fetchCHANGEDURATION(duration) {
    return {
        type: 'CHANGE_DURATION',
        duration
    }
}