import * as yup from "yup"

export const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup
            .string()
            .min(6, "The minimum number of characters is 6")
            .required(),
    })
    .required()
