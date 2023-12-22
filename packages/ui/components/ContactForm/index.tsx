"use client"

import InputWrapper from "../FormFields/InputWrapper"
import InputField from "../FormFields/InputField"
import * as Yup from "yup"
import { FormProvider, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../FormFields/Input"
import Button from "../Button"

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
                <form id="contactForm" className="flex flex-col gap-4">
                    <Input {...methods.register("firstName")} label={"First name"} required />
                    <Input {...methods.register("lastName")} label={"Last name"} required />
                    <Input {...methods.register("email")} label={"Email address"} required />
                    <Input {...methods.register("message")} label={"Your message"} required />
                    <Button></Button>
                </form>
            </FormProvider>
        </section>
    )
}

export default ContactForm
