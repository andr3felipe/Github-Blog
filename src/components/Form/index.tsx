import { useForm } from 'react-hook-form'
import React, { ChangeEvent } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormContainer, Input } from './styles'
import { Issue } from '../../Pages/Home'

const FormValidationSchema = z.object({
  search: z.string(),
})

type FormValidationSchemaType = z.infer<typeof FormValidationSchema>

interface FormProps {
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
  issues: Issue[]
}

export function Form({ issues, filter, setFilter }: FormProps) {
  const { register, handleSubmit, formState } =
    useForm<FormValidationSchemaType>({
      resolver: zodResolver(FormValidationSchema),
    })

  function handleFilterOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFilter(e.target.value)
  }

  return (
    <FormContainer>
      <div>
        <h3>Publicações</h3>
        <h5>{issues.length} publicações</h5>
      </div>
      <form action="">
        <Input
          type="text"
          placeholder="Buscar conteúdo"
          value={filter}
          onChange={(e) => handleFilterOnChange(e)}
        />
      </form>
    </FormContainer>
  )
}
