export const required = value => {
     return value ? undefined : `Field is required` 
}

export const maxlength = maxLengthValue => value => {
    return value.length && value.length > maxLengthValue ? `Max length of post is ${maxLengthValue} symbols` : undefined 
}