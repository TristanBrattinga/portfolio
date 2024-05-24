'use client'

import * as Yup from 'yup'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../FormFields/Input'
import Button from '../Button'
import clsx from 'clsx'
import CloseIcon from '../../icons/CloseIcon'
import { slideInBottom, useAnimations } from '../../utils/animations'
import { useState } from 'react'
import CheckmarkIcon from '../../icons/CheckmarkIcon'

const ContactForm = () => {
    const { ref, inView } = useAnimations()
    const [success, setSuccess] = useState(false)
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const schema = Yup.object({
        firstName: Yup.string().min(1, 'This field is required'),
        lastName: Yup.string().min(1, 'This field is required'),
        email: Yup.string().min(1, 'This field is required').email('No valid email address'),
        message: Yup.string().min(1, 'This field is required'),
    })

    type FormSchema = Yup.InferType<typeof schema>

    const methods = useForm<FormSchema>({ resolver: yupResolver(schema) })

    const onSubmit = async (values: FormSchema) => {
        try {
            setIsLoading(true)
            setIsLoading(false)
            setSuccess(true)
        } catch (e) {
            setIsLoading(false)
            setSuccess(false)
            console.log(e)
        } finally {
            setShowMessage(true)
            methods.reset()
            setTimeout(() => {
                setShowMessage(false)
            }, 5000)
        }
    }

    return (
        <section className="container my-12 lg:my-36">
            <h1 ref={ref} className={clsx('text-clr-text text-5xl mb-10', slideInBottom(inView))}>
                Say Hi
            </h1>
            <FormProvider {...methods}>
                <form
                    ref={ref}
                    id="contactForm"
                    className={clsx('flex flex-col gap-4 max-w-sm', slideInBottom(inView))}
                >
                    <Input {...methods.register('firstName')} label={'test'} placeholder={'First name'} required />
                    <Input {...methods.register('lastName')} label={'test'} placeholder={'Last name'} required />
                    <Input {...methods.register('email')} label={'test'} placeholder={'Email address'} required />
                    <Input {...methods.register('message')} label={'test'} placeholder={'Your message'} required />
                    <Button onClick={methods.handleSubmit(onSubmit)} variant="primary" loading={isLoading}>
                        Send
                    </Button>
                </form>
            </FormProvider>
            <div
                className={clsx(
                    'flex items-center justify-between rounded-xl bg-green-50 p-2 select-none mt-4',
                    {
                        'bg-green-50': success,
                        'bg-red-50': !success,
                    },
                    slideInBottom(showMessage),
                )}
            >
                <div className="flex items-center gap-4 pl-4">
                    <CheckmarkIcon
                        className={clsx('', {
                            '[&>path]:stroke-red-600': !success,
                            '[&>path]:stroke-green-600': success,
                        })}
                    />
                    <p
                        className={clsx('text-sm', {
                            'text-green-800': success,
                            'text-red-600': !success,
                        })}
                    >
                        {success ? 'Form successfully submitted' : 'Something went wrong. Please contact us by email.'}
                    </p>
                </div>
                <button
                    onClick={() => setShowMessage(false)}
                    className={clsx('p-3 rounded-md transition-all duration-200', {
                        'hover:bg-green-100': success,
                        'hover:bg-red-100': !success,
                    })}
                >
                    <CloseIcon
                        className={clsx('', {
                            '#22c55e': success,
                            '#ef4444': !success,
                        })}
                    />
                </button>
            </div>
        </section>
    )
}

export default ContactForm
