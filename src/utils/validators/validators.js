export const required = value => {
        return value ? undefined : `Field is required` 
        
}

export const maxlength = (maxLengthValue, fieldName='item') => value => {
    return value.length && value.length > maxLengthValue ? `Max length of ${fieldName} is ${maxLengthValue} symbols` : undefined 
}

export const minLength = (minLengthValue, fieldName='item') => value => {
    return value.length && value.length < minLengthValue ? `Min lenght of ${fieldName} is ${minLengthValue} symbols` : undefined
}