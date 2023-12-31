import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FiArrowLeft } from "react-icons/fi";
export default function page() {
  return (
    <div className="w-full min-h-[100vh] max-w-3xl pt-32">
      <div className="flex p-4 flex-col gap-8">
        <div className="w-fit">
          <Link
            href={"/hockey"}
            className="group flex gap-4 text-[#00061d] text-md font-bold items-center justify-center transition-all hover:underline"
          >
            <FiArrowLeft className=" text-[#00061d] text-lg" />
            Retour
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center text-4xl font-bold">
            <h1>Marc Gratton</h1>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <Tabs defaultValue="actuelle" className="max-w-[600px]">
          <TabsList>
            <TabsTrigger value="actuelle">Saison Actuelle</TabsTrigger>
            <TabsTrigger value="carrière">Carrière</TabsTrigger>
          </TabsList>
          <TabsContent value="actuelle">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques 2023</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#000c3b]">
                        Parties jouées
                      </TableHead>
                      <TableHead className="text-[#000c3b]">
                        Victoires
                      </TableHead>
                      <TableHead className="text-[#000c3b]">Défaites</TableHead>
                      <TableHead className="text-[#000c3b]">Buts</TableHead>
                      <TableHead className="text-[#000c3b]">Passes</TableHead>
                      <TableHead className="text-[#000c3b]">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>7</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>6</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="carrière">
            <Card>
              <CardHeader>
                <CardTitle>Statistiques de carrière</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#000c3b]">
                        Parties jouées
                      </TableHead>
                      <TableHead className="text-[#000c3b]">
                        Victoires
                      </TableHead>
                      <TableHead className="text-[#000c3b]">Défaites</TableHead>
                      <TableHead className="text-[#000c3b]">Buts</TableHead>
                      <TableHead className="text-[#000c3b]">Passes</TableHead>
                      <TableHead className="text-[#000c3b]">Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>84</TableCell>
                      <TableCell>60</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>32</TableCell>
                      <TableCell>11</TableCell>
                      <TableCell>43</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
