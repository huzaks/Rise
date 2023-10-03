import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Switch } from "@/components/ui/switch";
export default function page() {
  return (
    <div className="w-full min-h-[100vh] max-w-3xl pt-32">
      <div className="flex p-4 flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center text-4xl font-bold">
            <h1>Marc Gratton</h1>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Modification du profil</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-16">
              <label className="flex items-center gap-2">
                Visibilité des statistiques (Publique)
                <Switch />
              </label>
              <Link
                href={"#"}
                className="self-end bg-[#000c3b] hover:bg-[#00061d] border-4 border-[#000c3b] hover:border-[#00061d] text-white rounded-[50px] py-2 px-6 text-xl font-bold items-center justify-center transition-all w-fit"
              >
                Appliquer
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
