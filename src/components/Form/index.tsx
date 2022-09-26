import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, Input } from './styles'

const FormValidationSchema = z.object({
  search: z.string(),
})

type FormValidationSchemaType = z.infer<typeof FormValidationSchema>

export function Form() {
  const { register, handleSubmit, formState } =
    useForm<FormValidationSchemaType>({
      resolver: zodResolver(FormValidationSchema),
    })

  function handleFormSubmit(data: any) {
    console.log('data', data)
  }

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <h5>6 publicações</h5>
      </div>
      <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('search')}
        />
      </form>
    </FormContainer>
  )
}
