import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Switch } from "@/components/ui/switch"
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
              <label className="flex items-center gap-2">
                    Visibilité des statistiques (Publique)
                  <Switch />
                  </label>
              </CardContent>
            </Card>
          
          
      </div>
    </div>
  );
}
