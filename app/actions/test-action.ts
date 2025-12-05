"use server"

export async function testServerAction(data: any) {
  // Эта функция будет использоваться для тестирования десериализации
  console.log("Received data:", data);
  return { success: true, received: data };
}
