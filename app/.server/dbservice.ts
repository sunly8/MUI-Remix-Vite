export async function saveUser(name: string) {
  // await db.user.create({
  //   data: {
  //     name,
  //   },
  // });
  return { success: true, message: "Save successfully", data: { name } }
}
