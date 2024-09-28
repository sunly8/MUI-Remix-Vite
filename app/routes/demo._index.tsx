import { redirect } from "@remix-run/server-runtime";

// You can use the loader function to redirect, or output a component

export const loader = () => {
  return redirect('/demo/formdata');
};
