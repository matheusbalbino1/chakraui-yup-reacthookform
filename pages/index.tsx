
import { Input, Button, Stack, FormControl, FormErrorMessage } from "@chakra-ui/react"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { FieldError } from "react-hook-form"
import { useState } from "react"
import { useForm } from "react-hook-form"


interface ErrorProps {
  errors: {
    email?: FieldError;
    age?: FieldError;
    password?: FieldError;
  }


}

export default function Home() {


  const signInFormSchema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório!"),
    password: yup.string().required().min(8, "Obrigatório no mínimo 8 digitos!"),
    age: yup.number(  ).positive().integer().required("Idade obrigatória!").min(18, "Obrigatório ter no mínimo 18 anos")
  })

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  })
  const [data, setData] = useState("")

  let { errors }: ErrorProps = formState
  console.log(data)
  console.log(errors)



  async function Submitar(data) {

    await new Promise(resolve => setTimeout(resolve, 2000))
    setData(JSON.stringify(data))
  }

  return (
    <div>
      <Stack
        as="form"
        spacing={3}
        display="flex"
        w="100%"
        justify={"center"}
        direction="column"
        align={"center"}
        onSubmit={handleSubmit(Submitar)}
        h="100vh">
        <FormControl isInvalid={!!errors.email} width="50%">

          <Input
            type="text"
            {...register("email")}
            width="100%"
            color="black"
            bg="white" />
          {!!errors.email && (
            <FormErrorMessage >{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password} width="50%">
          <Input
            type="password"
            {...register("password")}

            width="100%"
            color="black"
            bg="white" />
          {!!errors.password && (
            <FormErrorMessage >{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.age} width="50%">
          <Input
            type="number"
            {...register("age")}

            width="100%"
            color="black"
            bg="white" />
          {!!errors.age && (
            <FormErrorMessage >{errors.age.message}</FormErrorMessage>
          )}
        </FormControl>

        <Button
          type="submit"
          colorScheme="pink"
          width="50%"
          isLoading={formState.isSubmitting}>Entrar</Button>

      </Stack>
    </div>
  )
}
