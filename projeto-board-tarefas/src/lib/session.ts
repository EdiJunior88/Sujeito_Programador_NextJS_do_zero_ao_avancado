import { getServerSession } from "next-auth/next";

import { authOptions } from "../app/api/auth/[...nextauth]/route";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  //Se estiver logado, retorna o usuário (email Google)
  //Se não estiver logado, retorna undefined
  if (session?.user?.email) {
    return {
      user: {
        email: session.user.email,
      },
    };
  } else {
    return undefined;
  }
}
