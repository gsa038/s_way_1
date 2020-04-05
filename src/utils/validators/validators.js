export const required = value => {
     return value ? undefined : `Field is required` 
}

export const maxLenght = maxLengthValue => value => {
    return value.length && value.length > maxLengthValue ? `Max lenght of post is ${maxLengthValue} symbols` : undefined 
}