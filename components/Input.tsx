import { Input as Teste } from "@chakra-ui/react"
import { InputHTMLAttributes, useState } from "react"
import { useForm } from "react-hook-form"


interface InputProps{
    name:string;
    type?:string;
}

export function Input({name, type}:InputProps) {

    const { register, handleSubmit } = useForm()
    
    return (
        <Teste
            padding="8"
           
            type={type}
            fontSize="32"
            width="50%" />
    )
}