import { ActionFunctionArgs } from "@remix-run/server-runtime";

export async function action({ request, params }: ActionFunctionArgs) {
  const { action } = params;
  switch (action) {
    case 'formdata':
      const { name } = await request.json();
      return { success: true, message: 'FormData submitted', name };
    default:
      return { success: false, message: 'Action not found' };
  }
}
