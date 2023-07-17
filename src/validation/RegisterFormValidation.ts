import * as yup from "yup"

export const schema = yup
    .object({
        name: yup
            .string()
            .min(3, "The minimum number of characters is 3")
            .required(),
        email: yup.string().email().required(),
        password: yup
            .string()
            .min(6, "The minimum number of characters is 6")
            .required(),
        confirm_password: yup
            .string()
            .min(6, "The minimum number of characters is 6")
            .oneOf(
                [yup.ref("password"), ""],
                "Confirm password must be the same",
            )
            .required(),
    })
    .required()
