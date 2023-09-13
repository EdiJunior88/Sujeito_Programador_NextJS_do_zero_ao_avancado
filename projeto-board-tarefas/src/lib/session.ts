// import { getServerSession } from "next-auth/next";

// import { authOptions } from "../app/api/auth/[...nextauth]/route";

// export async function getCurrentUser() {
//   const session = await getServerSession(authOptions);

//   if (session?.user?.email) {
//     return {
//       user: {
//         email: session.user.email,
//       },
//     };
//   }
// }

import { getServerSession } from "next-auth/next";

import { authOptions } from "../app/api/auth/[...nextauth]/route";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return {
    user: {
      email: session?.user?.email,
    },
  };
}
