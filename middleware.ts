import { NextResponse, NextMiddleware } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";
import { prisma } from "./prisma/prisma";

export async function middleware(req: NextRequest) {
  const aUser = await prisma.user.findFirst();
  console.log(aUser);

  return;
}

export const config = {
  matcher: ["/admin/:path*"],
};
