import { useFetcher } from "@remix-run/react"

export const hookFetcher = (action: string) => {
  const fetcher = useFetcher<{ totalCount: number, data?: any[], success: boolean, message: string }>()
  const submit = (body: any) => {
    fetcher.submit(body, { action, method: 'POST', encType: 'application/json' })
  }
  return { fetcher, submit }
}

export const hookFormData = (action: string) => {
  const fetcher = useFetcher<{ success: boolean, message: string }>()
  const submit = (form: FormData) => {
    fetcher.submit(form, { action, method: 'POST', encType: 'multipart/form-data' })
  }
  return { fetcher, submit }
}
