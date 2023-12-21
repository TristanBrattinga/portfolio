"use client"

import InputWrapper from "../FormFields/InputWrapper"
import InputField from "../FormFields/InputField"
import * as Yup from "yup"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../FormFields/Input"

const ContactForm = () => {
    const schema = Yup.object({
        firstName: Yup.string().min(1, "This field is required"),
        lastName: Yup.string().min(1, "This field is required"),
        email: Yup.string().min(1, "This field is required").email("No valid email address"),
        message: Yup.string().min(1, "This field is required"),
    })

    type FormSchema = Yup.InferType<typeof schema>

    const methods = useForm<FormSchema>({ resolver: yupResolver(schema) })

    return (
        <section className="flex mt-20 justify-center">
            <FormProvider {...methods}>
                <form id="contactForm">
                    <Input {...methods.register("firstName")} label={"First name"} required />
                </form>
            </FormProvider>
        </section>
    )
}

export default ContactForm
